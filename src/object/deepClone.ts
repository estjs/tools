/**
 * Creates a deep clone of an object or array.
 * Handles nested objects, arrays, and primitive values.
 * Note: Does not handle functions, DOM nodes, or circular references.
 *
 * @template T Type of value to clone
 * @param value The value to clone
 * @returns A deep clone of the input value
 * @example
 *   const obj = {
 *     name: 'John',
 *     profile: {
 *       age: 30,
 *       hobbies: ['reading', 'gaming']
 *     }
 *   };
 *   const clone = deepClone(obj);
 *   // Modifying clone.profile.hobbies won't affect original
 */
export function deepClone<T>(value: T): T {
  // Handle null, undefined and primitives
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // Handle Date objects
  if (value instanceof Date) {
    return new Date(value.getTime()) as any;
  }

  // Handle Array
  if (Array.isArray(value)) {
    return value.map(item => deepClone(item)) as any;
  }

  // Handle Object
  const result = {} as T;
  Object.keys(value as object).forEach(key => {
    result[key as keyof T] = deepClone((value as any)[key]);
  });

  return result;
}
