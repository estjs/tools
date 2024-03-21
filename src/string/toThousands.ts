export function toThousands(num: number | string, toFixedCount = 2) {
  let numStr = `${num}`;

  const regex: any[] = !numStr.includes('.')
    ? [/(?=(?!(\b))(\d{3})+$)/g, ',']
    : [/(\d)(?=(\d{3})+\.)/g, '$1,'];

  const fixedCount = 10 ** toFixedCount;
  const val = Math.round(+numStr * fixedCount) / fixedCount;
  numStr = `${val}`.replace(regex[0], regex[1]);

  return numStr;
}
