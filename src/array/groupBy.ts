/**
 * Groups array elements by a key.
 * The key can be either a property name or a function that returns the key.
 *
 * @template T Type of array elements
 * @template K Type of the key
 * @param arr The array to process
 * @param key The key to group by (string or function)
 * @returns An object with the grouped elements
 * @example
 *   const users = [
 *     { role: 'admin', name: 'John' },
 *     { role: 'user', name: 'Jane' },
 *     { role: 'admin', name: 'Mike' }
 *   ];
 *
 *   // Group by property
 *   groupBy(users, 'role')
 *   // {
 *   //   admin: [{ role: 'admin', name: 'John' }, { role: 'admin', name: 'Mike' }],
 *   //   user: [{ role: 'user', name: 'Jane' }]
 *   // }
 *
 *   // Group by function
 *   groupBy(users, user => user.role.toUpperCase())
 *   // {
 *   //   ADMIN: [{ role: 'admin', name: 'John' }, { role: 'admin', name: 'Mike' }],
 *   //   USER: [{ role: 'user', name: 'Jane' }]
 *   // }
 */
export function groupBy<T, K extends string | number>(
  arr: T[],
  key: K | ((item: T) => K),
): Record<K, T[]> {
  return arr.reduce(
    (groups, item) => {
      const groupKey = typeof key === 'function' ? key(item) : (item as any)[key];
      if (!groups[groupKey as K]) {
        groups[groupKey as K] = [];
      }
      groups[groupKey as K].push(item);
      return groups;
    },
    {} as Record<K, T[]>,
  );
}
