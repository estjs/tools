const hyphenateRE = /([^-])([A-Z])/g;
export function hyphenate(str: string) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();
}
export function toHump(str: string) {
  return str.replace(/[_|-](\w)/g, (_, letter)=> {
    return letter.toUpperCase();
  });
}
export function capitalize (str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isReserved (str: string) {
  const c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
