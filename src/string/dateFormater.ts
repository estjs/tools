export const dateFormater = (formater: string, time?: string) => {
  const date = time ? new Date(time) : new Date(),
    Y = date.getFullYear() + '',
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  return formater.replaceAll('YYYY|yyyy', Y)
    .replaceAll('YY|yy', Y.slice(2, 4))
    .replaceAll('MM', (M < 10 ? '0' : '') + M)
    .replaceAll('DD', (D < 10 ? '0' : '') + D)
    .replaceAll('HH|hh', (H < 10 ? '0' : '') + H)
    .replaceAll('mm', (m < 10 ? '0' : '') + m)
    .replaceAll('ss', (s < 10 ? '0' : '') + s);
};
