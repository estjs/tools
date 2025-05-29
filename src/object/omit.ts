/**
 * Creates a new object with specified properties omitted.
 * @template T Input object type
 * @template K Keys to omit
 * @param obj Input object
 * @param keys Array of keys to omit
 * @returns New object without specified keys
 * @example
 *   const obj = { name: 'John', age: 30, role: 'admin' };
 *   omit(obj, ['role']); // { name: 'John', age: 30 }
 */
export function omit<T extends Record<string | number, any>, K extends keyof T>(
  obj: T,
  keys: Array<K | string>,
): Omit<T, K> {
  const clone: T = { ...obj };
  keys.forEach(key => {
    if (key in clone) {
      delete clone[key as K];
    }
  });
  return clone;
}
