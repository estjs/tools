const camelizeRE = /-(\w)/g;
export function camelize (str: string) {
  return str.replace(camelizeRE, (_, c) => { return c ? c.toUpperCase() : ''; });
}

const hyphenateRE = /([^-])([A-Z])/g;
export function hyphenate(str: string) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();
}

export function capitalize (str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isReserved (str: string) {
  const c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
