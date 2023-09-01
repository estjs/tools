export function uniqueArray<T extends any[]>(arr: T) {
  if (!Array.isArray(arr)) {
    throw new TypeError('The first parameter must be an array');
  }
  if (arr.length === 1) {
    return arr;
  }

  return [...new Set(arr)];
}
