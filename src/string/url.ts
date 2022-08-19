import { isEmptyObj } from '../is/isEmpty';

// json转化为路由参数格式
export function JsonToUrlParam(json: Record<string, string> = {}): string {
  if (isEmptyObj(json)) {
    return '';
  }
  return Object.keys(json)
    .map((key) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`;
    })
    .join('&');
}
export function getUrlParam(s?: string): Record<string, string> | undefined {
  s = (s || window.location.search).split('?')[1];
  if (!s) { return; }
  return s.split('&').reduce((pre, cur) => {
    const [key, value] = cur.split('=');
    pre[key] = value;
    return pre;
  }, {} as Record<string, string>);
}
