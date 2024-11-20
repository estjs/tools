/**
 * Checks if an object is empty (has no own enumerable properties).
 * @param {object} value - The object to check.
 * @returns {boolean} - `true` if the object is empty, otherwise `false`.
 *
 * @example
 * console.log(isEmptyObj({})); // Output: true
 * console.log(isEmptyObj({ key: 'value' })); // Output: false
 */
export function isEmptyObj(value: object): boolean {
  return Object.getOwnPropertyNames(value).length === 0;
}

/**
 * Checks if an array is empty.
 * @param {Array<unknown>} value - The array to check.
 * @returns {boolean} - `true` if the array is empty, otherwise `false`.
 *
 * @example
 * console.log(isEmptyArr([])); // Output: true
 * console.log(isEmptyArr([1, 2, 3])); // Output: false
 */
export function isEmptyArr(value: Array<unknown>): boolean {
  return value.length === 0;
}

/**
 * Checks if a string is empty.
 * @param {string} value - The string to check.
 * @returns {boolean} - `true` if the string is empty, otherwise `false`.
 *
 * @example
 * console.log(isEmptyStr('')); // Output: true
 * console.log(isEmptyStr('hello')); // Output: false
 */
export function isEmptyStr(value: string): boolean {
  return value.length === 0;
}

/**
 * Checks if a Set is empty.
 * @param {Set<unknown>} value - The Set to check.
 * @returns {boolean} - `true` if the Set is empty, otherwise `false`.
 *
 * @example
 * console.log(isEmptySet(new Set())); // Output: true
 * console.log(isEmptySet(new Set([1, 2, 3]))); // Output: false
 */
export function isEmptySet(value: Set<unknown>): boolean {
  return value.size === 0;
}

/**
 * Checks if a Map is empty.
 * @param {Map<object, unknown>} value - The Map to check.
 * @returns {boolean} - `true` if the Map is empty, otherwise `false`.
 *
 * @example
 * console.log(isEmptyMap(new Map())); // Output: true
 * console.log(isEmptyMap(new Map([['key', 'value']]))); // Output: false
 */
export function isEmptyMap(value: Map<unknown, unknown>): boolean {
  return value.size === 0;
}

/**
 * Checks if a value is empty.
 * Supported types: object, array, string, Set, Map, or `null`/`undefined`.
 * @param {unknown} value - The value to check.
 * @returns {boolean} - `true` if the value is empty, otherwise `false`.
 *
 * @example
 * console.log(isEmpty({})); // Output: true
 * console.log(isEmpty([])); // Output: true
 * console.log(isEmpty('')); // Output: true
 * console.log(isEmpty(new Set())); // Output: true
 * console.log(isEmpty(new Map())); // Output: true
 * console.log(isEmpty(null)); // Output: true
 * console.log(isEmpty(undefined)); // Output: true
 * console.log(isEmpty(0)); // Output: false
 * console.log(isEmpty(false)); // Output: false
 */
export function isEmpty(value: unknown): boolean {
  if (value == null) return true; // Handles null and undefined
  if (typeof value === 'object') {
    if (Array.isArray(value)) return isEmptyArr(value);
    if (value instanceof Set) return isEmptySet(value);
    if (value instanceof Map) return isEmptyMap(value);
    return isEmptyObj(value);
  }
  if (typeof value === 'string') return isEmptyStr(value);
  return false; // Non-empty for other types (e.g., numbers, booleans)
}
