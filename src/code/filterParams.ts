/**
 * @param params
 * @returns
 */
export function filterParams(params: { [key in string]: any }, trim = true) {
  const str = JSON.stringify(params);
  let res: any = {};
  res = JSON.parse(str, (key, val) => {
    if (val !== undefined && key.indexOf('_') !== 0) {
      if (typeof val === 'string') {
        return trim ? val.trim() : val;
      }
      return val;
    }
  });
  return res;
}

