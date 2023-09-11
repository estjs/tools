import { dateFormatter } from '../string/dateFormatter';

export type LogLevel = 'log' | 'error' | 'warn' | 'debug' | 'info';

export const LOG_LIST = ['log', 'error', 'warn', 'debug', 'info'];

export const clc = {
  green: (text: string) => `\u001B[32m${text}\u001B[39m`,
  yellow: (text: string) => `\u001B[33m${text}\u001B[39m`,
  red: (text: string) => `\u001B[31m${text}\u001B[39m`,
  blue: (text: string) => `\u001B[34m${text}\u001B[39m`,
  magentaBright: (text: string) => `\u001B[95m${text}\u001B[39m`,
  cyanBright: (text: string) => `\u001B[96m${text}\u001B[39m`,
};

export class Logger {
  protected name = '';
  protected time = false;
  private static localInstance: Logger;

  constructor(name = '', time = false) {
    this.name = name;
    this.time = time;
  }

  public log(...args: any[]) {
    this.logger('log', args);
  }

  public info(...args: any[]) {
    this.logger('info', args);
  }

  public error(...args: any[]) {
    this.logger('error', args);
  }

  public warn(...args: any[]) {
    this.logger('warn', args);
  }

  public debug(...args: any[]) {
    this.logger('debug', args);
  }

  private logger(Level: LogLevel, args: any[]) {
    const fn = this.getConsoleFn(Level);
    const time = this.time ? `[${dateFormatter('', 'YYYY-MM-DD HH:mm:ss')}] ` : '';
    const name = this.name ? `[${this.name}]` : '';
    const color = this.getColorByLogLevel(Level);
    const info = `${time}${name}${time || name ? ': ' : ''}${color(Level)} ${args.join(' ')}`;
    fn(info);
  }

  private getConsoleFn(level: LogLevel): Function {
    const consoleFnMap: Record<LogLevel, Function> = {
      debug: console.debug.bind(console),
      warn: console.warn.bind(console),
      error: console.error.bind(console),
      info: console.info.bind(console),
      log: console.log.bind(console),
    };
    return consoleFnMap[level] || console.log.bind(console);
  }

  private getColorByLogLevel(level: LogLevel) {
    const colorMap = {
      debug: clc.magentaBright,
      warn: clc.yellow,
      error: clc.red,
      info: clc.blue,
      log: clc.cyanBright,
    };
    return colorMap[level] || clc.green;
  }

  static getInstance(name = '', time = false) {
    if (!this.localInstance) {
      this.localInstance = new Logger(name, time);
    }
    return this.localInstance;
  }
}
