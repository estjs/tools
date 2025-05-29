/**
 * 将数字或字符串格式化为千分位字符串。
 * @param num 数字或字符串
 * @param toFixedCount 保留小数位数，默认2位
 * @returns 千分位格式化字符串
 * @example
 *   thousands(1234567.89); // '1,234,567.89'
 *   thousands('1234567.89', 1); // '1,234,567.9'
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
