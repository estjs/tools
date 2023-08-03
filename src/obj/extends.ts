export const extend = <T extends Record<string, any>, U extends Record<string, any>>(
  objFir: T,
  objSec: U,
): T & U => {
  return Object.assign({}, objFir, objSec);
};

export function extendDeep<
  T extends Record<string, any> | any[],
  U extends Record<string, any> | any[],
>(objFir: T, objSec: U): T & U {
  if (typeof objFir !== 'object') {
    objFir = {} as T;
  }

  if (Array.isArray(objSec)) {
    return objSec.slice() as T & U;
  }

  Object.keys(objSec).forEach(property => {
    const sourceProperty = objSec[property];
    if (typeof sourceProperty === 'object') {
      objFir[property as keyof typeof objFir] = extendDeep(objSec[property], sourceProperty);
    } else {
      objFir[property as keyof typeof objFir] = sourceProperty;
    }
  });
  return objFir as T & U;
}
