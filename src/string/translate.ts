export function capitalize (str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function lowercase(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function isReserved (str: string) {
  const c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

// 转换短横线命名
// xxXXXxx => xx-xxx-xx
export const toKebabCase = (string: string): string => {
  return string.replace(/[A-Z]+/g, (match, offset) => {
    return `${offset > 0 ? '-' : ''}${match.toLocaleLowerCase()}`;
  });
};
// 转换驼峰命名
// xx-xxx-xx => xxXXXxx
export const toPascalCase = (string: string): string => {
  return string
    .replace(/^./, match => match.toLocaleUpperCase())
    .replace(/-(.)/g, (match, p1: string) => {
      return p1.toLocaleUpperCase();
    });
};
