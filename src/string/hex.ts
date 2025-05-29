/**
 * 将字符串转换为16进制字符串。
 * @param str 输入字符串
 * @returns 16进制字符串
 * @example
 *   stringToHex('abc') // '616263'
 */
export function stringToHex(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .split('')
    .map(item => item.charCodeAt(0).toString(16))
    .join('');
}
