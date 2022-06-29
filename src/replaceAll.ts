export function replaceAll(str: string, val: string, newVal: string): string {
  const reg = new RegExp(val, 'g');
  return str.replace(reg, newVal);
}
