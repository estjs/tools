/**
 * @param formater
 * @param time
 * @returns
 */
export const dateFormater = (formater = 'YYYY-MM-DD HH:mm:ss', time?: string | number) => {
  const date = time ? new Date(time) : new Date(),
    Y = date.getFullYear() + '',
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  return formater.replaceAll('YYYY', Y)
    .replaceAll('YY', Y.slice(2, 4))
    .replaceAll('MM', (M < 10 ? '0' : '') + M)
    .replaceAll('DD', (D < 10 ? '0' : '') + D)
    .replaceAll('HH', (H < 10 ? '0' : '') + H)
    .replaceAll('mm', (m < 10 ? '0' : '') + m)
    .replaceAll('ss', (s < 10 ? '0' : '') + s);
};

