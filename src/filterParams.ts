/**
 * @param params
 * @returns
 */
export function filterParams(params: { [key in string]: any } & { __trim__: boolean }) {
  const { __trim__, ...p } = params;
  const str = JSON.stringify(p);
  let res: any = {};
  res = JSON.parse(str, (key, val) => {
    if (val !== undefined && key.indexOf('_') !== 0) {
      if (typeof val === 'string') {
        return __trim__ ? val.trim() : val;
      }
      return val;
    }
  });
  return res;
}

