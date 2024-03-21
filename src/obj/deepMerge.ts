import { isPlainObject } from '../is/isType';

/**
 * Merges multiple objects into a single object, deeply combining the properties of all the objects.
 *
 * @param {Record<any, any>} target - The target object to merge into
 * @param {Record<any, any>[]} sources - The source objects to merge
 * @return {Record<any, any>} The merged object
 */
export function deepMerge(target: Record<any, any>, ...sources: Record<any, any>[]) {
  if (!isPlainObject(target)) {
    return target;
  }

  sources.forEach(source => {
    if (!isPlainObject(source)) {
      throw new Error(`${source} is not objectType`);
    }

    if (Object.keys(target).length === 0) {
      Object.assign(target, source);
    } else {
      for (const key in source) {
        if (key in target && isPlainObject(target[key]) && isPlainObject(source[key])) {
          deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
  });
  return target;
}
