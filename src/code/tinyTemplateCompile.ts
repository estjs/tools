import { escapeHtml } from './string/escapeHtml';

enum State {
  EVAL,
  ESCAPED,
  RAW,
  COMMENT,
  LITERAL
}

const REGEXP = /(<%%|%%>|<%=|<%-|<%#|<%|%>)/;

const start = '<%';
const end = '%>';
const escpStart = '<%%';
const escpEnd = '%%>';
const escpout = '=';
const unEscpout = '-';
const hash = '#';

export class templateCompile {
  public template: string;
  private tokens: string[] = [];
  private source = '';
  private state?: State;
  private fn?: Function;

  public constructor(template: string) {
    this.template = template;
  }

  public compile() {
    this.parseTemplateText();
    this.transformTokens();
    this.wrapIt();
  }

  public render(local: object) {
    return this.fn!.call(null, local, escapeHtml);
  }

  private wrapIt() {
    this.source = `\
          const __out = [];
          const __append = __out.push.bind(__out);
          with(local||{}) {
          ${this.source}
          }
          return __out.join('');\
          `;

    this.fn = new Function('local', 'escapeFn', this.source);
  }

  /**
   * token解析
   * 将<% if (codintion) { %>
   * 解析为token数组，例如['<%', ' if (condition) { ', '%>']
   */
  private parseTemplateText() {
    let str = this.template;
    const arr = this.tokens;
    let res = REGEXP.exec(str);
    let index;

    while (res) {
      index = res.index;
      // 前置字符串
      if (index !== 0) {
        arr.push(str.slice(0, Math.max(0, index)));
        str = str.slice(index);
      }

      arr.push(res[0]);
      str = str.slice(res[0].length);
      res = REGEXP.exec(str);
    }

    if (str) {
      arr.push(str);
    }
  }

  private transformTokens() {
    if (this.tokens.length === 0) {
      return;
    }

    this.tokens.forEach((tok, idx) => {
      let closing: string;
      // 基本的语法检查
      // 检查标签是否关闭
      if (tok.includes(start) && !tok.includes(escpStart)) {
        closing = this.tokens[idx + 2];
        if (closing == null || !closing.includes(end)) {
          throw new Error(`${tok} 未找到对应的标签`);
        }
      }

      // 开始扫描token
      switch (tok) {
        case start:
          this.state = State.EVAL;
          break;
        case start + escpout:
          this.state = State.ESCAPED;
          break;
        case start + unEscpout:
          this.state = State.RAW;
          break;
        case start + hash:
          this.state = State.COMMENT;
          break;
        case escpStart:
          this.state = State.LITERAL;
          this.source += ';__append(\'<%\');\n';
          break;
        case escpEnd:
          this.state = State.LITERAL;
          this.source += ';__append(\'%>\');\n';
          break;
        case end:
          this.state = undefined;
          break;
        default:
          // 非分隔符
          if (this.state != null) {
            switch (this.state) {
              case State.EVAL:
                // 代码
                this.source += `;${tok}\n`;
                break;
              case State.ESCAPED:
                this.source += `;__append(escapeFn(${stripSemi(tok)}));\n`;
                break;
              case State.RAW:
                this.source += `;__append(${stripSemi(tok)});\n`;
                break;
              case State.LITERAL:
                this.source += `;__append('${transformString(tok)}');\n`;
                break;
              case State.COMMENT:
                // do nothing
                break;
            }
          } else {
            this.source += `;__append('${transformString(tok)}');\n`;
          }
      }
    });
  }
}

function transformString(str: string) {
  // 转义\\
  str = str.replace(/\\/g, '\\\\');
  // 转换换行符
  str = str.replace(/\n/g, '\\n');
  str = str.replace(/\r/g, '\\r');

  // 转换单引号
  str = str.replace(/'/g, '\\\'');
  return str;
}

function stripSemi(str: string) {
  return str.replace(/;(\s*$)/, '$1');
}
