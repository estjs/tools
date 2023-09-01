import { isPlainObject } from '../is/isType';

/**
 * 深合并
 * @param target 对象
 * @param sources 其他对象
 * @returns
 */
export function deepMerge(
  target: Record<any, any>,
  ...sources: Record<any, any>[]
) {
  if (!isPlainObject(target)) { return target; }

  sources.forEach((source) => {
    if (!isPlainObject(source)) { throw new Error(`${source} is not objectType`); }

    if (Object.keys(target).length === 0) {
      Object.assign(target, source);
    } else {
      for (const key in source) {
        if (
          key in target
          && isPlainObject(target[key])
          && isPlainObject(source[key])
        ) { deepMerge(target[key], source[key]); } else { target[key] = source[key]; }
      }
    }
  });
  return target;
}
