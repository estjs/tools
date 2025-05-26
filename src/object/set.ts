import { isNaN, isObject } from '../utils';
/**
 * Safely sets the value at path of object.
 * If a portion of path doesn't exist, it's created.
 * Arrays are created for missing index references and objects for all other missing properties.
 *
 * @template T Type of the source object
 * @template V Type of the value to set
 * @param obj The object to modify
 * @param path Path of the property to set, can be a string with dot notation or an array of keys
 * @param value The value to set
 * @returns The modified object
 * @example
 *   const obj = {
 *     user: {
 *       profile: {
 *         name: 'John'
 *       }
 *     }
 *   };
 *
 *   // Set existing nested property
 *   set(obj, 'user.profile.name', 'Jane');
 *
 *   // Set new nested property
 *   set(obj, 'user.profile.age', 25);
 *
 *   // Create nested objects along the way
 *   set(obj, 'user.settings.theme', 'dark');
 *
 *   // Set array elements
 *   set(obj, 'user.profile.hobbies[0]', 'reading');
 */
export function set<T extends object, V>(obj: T, path: string | (string | number)[], value: V): T {
  if (!obj || !isObject(obj) || !path || !path.length) {
    return obj;
  }

  const keys = Array.isArray(path) ? path : path.split(/[.[\]]+/).filter(Boolean);
  let current: any = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    const nextKey = keys[i + 1];
    const isNextKeyNumeric = !isNaN(Number(nextKey));

    if (!(key in current)) {
      current[key] = isNextKeyNumeric ? [] : {};
    } else if (current[key] === null || typeof current[key] !== 'object') {
      current[key] = isNextKeyNumeric ? [] : {};
    }

    current = current[key];
  }

  const lastKey = keys[keys.length - 1];
  current[lastKey] = value;

  return obj;
}
