/**
 * Creates a new object with only the specified properties.
 * @template T Input object type
 * @template K Keys to pick
 * @param obj Input object
 * @param keys Array of keys to pick
 * @returns New object with only specified keys
 * @example
 *   const obj = { name: 'John', age: 30, role: 'admin' };
 *   pick(obj, ['name', 'age']); // { name: 'John', age: 30 }
 */
export function pick<T extends Record<string | number, any>, K extends keyof T>(
  obj: T,
  keys: Array<K | string>,
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) {
      result[key as K] = obj[key as K];
    }
  });
  return result;
}
