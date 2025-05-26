/**
 * Safely gets the value at path of object.
 * If the path doesn't exist, returns the default value instead of throwing.
 *
 * @template T Type of the source object
 * @template D Type of the default value
 * @param obj The source object
 * @param path Path of the property to get, can be a string with dot notation or an array of keys
 * @param defaultValue Value to return if path doesn't exist
 * @returns The value at path of object or the default value
 * @example
 *   const obj = {
 *     user: {
 *       profile: {
 *         name: 'John',
 *         address: {
 *           city: 'New York'
 *         }
 *       }
 *     }
 *   };
 *
 *   get(obj, 'user.profile.name'); // 'John'
 *   get(obj, 'user.profile.age', 25); // 25
 *   get(obj, ['user', 'profile', 'address', 'city']); // 'New York'
 *   get(obj, 'user.settings.theme', 'light'); // 'light'
 */
export function get<T extends object, D = undefined>(
  obj: T,
  path: string | (string | number)[],
  defaultValue?: D,
): D | any {
  if (!path || !path.length) {
    return defaultValue;
  }

  const keys = Array.isArray(path) ? path : path.split('.');
  let result: any = obj;

  for (const key of keys) {
    if (result == null || typeof result !== 'object') {
      return defaultValue;
    }
    result = result[key];
  }

  return result === undefined ? defaultValue : result;
}
