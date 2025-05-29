/**
 * Returns a new array with unique values.
 * Supports primitive values and objects.
 * For objects, it compares by reference by default.
 *
 * @template T Type of array elements
 * @param arr The array to process
 * @param key Optional key function to get comparison value for objects
 * @returns A new array with unique values
 * @example
 *   // With primitive values
 *   unique([1, 1, 2, 3, 3]) // [1, 2, 3]
 *   unique(['a', 'b', 'a']) // ['a', 'b']
 *
 *   // With objects using key function
 *   const users = [
 *     { id: 1, name: 'John' },
 *     { id: 2, name: 'Jane' },
 *     { id: 1, name: 'John' }
 *   ];
 *   unique(users, item => item.id) // [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
 */
export function unique<T>(arr: T[], key?: (item: T) => any): T[] {
  if (!key) {
    return Array.from(new Set(arr));
  }

  const seen = new Map<any, T>();
  arr.forEach(item => {
    const keyValue = key(item);
    if (!seen.has(keyValue)) {
      seen.set(keyValue, item);
    }
  });

  return Array.from(seen.values());
}
