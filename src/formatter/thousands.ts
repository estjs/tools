/*
 * Formats a number or string into a thousands-separated string.
 * @param {number | string} num - The number to format.
 * @param {number} [toFixedCount=2] - The number of decimal places to keep.
 * @returns {string} - The formatted string.
 *
 * @example
 * toThousands(1234567.89); // "1,234,567.89"
 * toThousands(1234567.89, 1); // "1,234,567.9"
 * toThousands("1234567.89"); // "1,234,567.89"
 */
export function thousands(num: number | string, toFixedCount: number = 2): string {
  let numStr = `${num}`;
  const regex: any[] = !numStr.includes('.')
    ? [/(?=(?!(\b))(\d{3})+$)/g, ',']
    : [/(\d)(?=(\d{3})+\.)/g, '$1,'];

  const fixedCount = 10 ** toFixedCount;
  const val = Math.round(+numStr * fixedCount) / fixedCount;
  numStr = `${val}`.replace(regex[0], regex[1]);

  return numStr;
}
