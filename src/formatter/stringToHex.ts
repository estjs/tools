/**
 * string to hex
 * @param str
 */
export function StringToHex(str: string) {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .trim()
    .split('')
    .map(item => item.charCodeAt(0).toString(16))
    .join('');
}
