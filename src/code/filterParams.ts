type FilterParams<T> = {
  [K in keyof T as K extends `_${string}` ? never : K]: T[K] extends string ? string : T[K];
};
/**
 * @param  {object} params 需要过滤的参数
 * @param  {boolean} trim 是否需要去除空格
 * @returns {object} 过滤后的参数
 */
export function filterParams<T>(params: T, trim = true): FilterParams<T> {
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
