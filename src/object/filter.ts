import { isString } from '../utils';

/**
 * Filters an object's properties by removing keys that start with '_' and optionally trims string values.
 * @param params The object to filter
 * @param trim Whether to trim string values (default: true)
 * @returns A new object with filtered properties
 * @example
 * ```ts
 * const obj = { name: ' Alice ', _private: 123, age: 20 };
 * filterObjectByKeys(obj);
 * // { name: 'Alice', age: 20 }
 * filterObjectByKeys(obj, false);
 * // { name: ' Alice ', age: 20 }
 * ```
 */
export function filterObjectByKeys<T extends Record<string, any>>(
  params: T,
  trim = true,
  key = '_',
): Partial<T> {
  const str = JSON.stringify(params);
  const res = JSON.parse(str, (k, v) => {
    if (v && !k.startsWith(key)) {
      if (isString(v)) {
        return trim ? v.trim() : v;
      }
      return v;
    }
  });
  return res;
}
