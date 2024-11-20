/**
 * Creates a new object by omitting specified keys from the given object.
 * @template T - The type of the input object.
 * @template K - The type of the keys to omit.
 * @param {T} obj - The input object to omit keys from.
 * @param {Array<K | string>} keys - An array of keys to omit. `string` allows omitting undeclared properties.
 * @returns {Omit<T, K>} - A new object with the specified keys omitted.
 *
 * @example
 * const user = { name: 'John', age: 30, role: 'admin' };
 * const result = omit(user, ['role', 'nonexistentKey']);
 * console.log(result); // Output: { name: 'John', age: 30 }
 */
export  function omit<T extends Record<string | number, any>, K extends keyof T>(
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
