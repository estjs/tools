export function replaceAll(str: string, val: string, newVal: string): string {
  // eslint-disable-next-line no-prototype-builtins
  if (String.prototype.hasOwnProperty('replaceAll')) {
    return str.replaceAll(val, newVal);
  }
  const reg = new RegExp(val, 'g');
  return str.replace(reg, newVal);
}
