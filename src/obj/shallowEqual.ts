/**
 * Compares two objects for shallow equality.
 * @param a - The first object to compare.
 * @param b - The second object to compare.
 * @returns True if objects are shallowly equal, false otherwise.
 */
export function shallowEqualObjects(a: any, b: any): boolean {
  // If either object is null or undefined while the other is not,
  // they are not equal.
  if ((a && !b) || (b && !a)) {
    return false;
  }

  // Iterate over keys in the first object.
  for (const key in a) {
    // Check if the values at the current key are not equal and
    // are not objects. If they are objects, shallow equality is not
    // checked for nested objects.
    if (a[key] !== b[key] && (typeof a[key] !== 'object' || typeof b[key] !== 'object')) {
      return false;
    }
  }

  // If all keys are shallowly equal, return true.
  return true;
}
