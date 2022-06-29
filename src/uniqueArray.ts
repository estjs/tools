export function uniqueArray(arr: string) {
  if (!Array.isArray(arr)) {
    throw new TypeError('The first parameter must be an array');
  } if (arr.length === 1) {
    return arr;
  }

  return [...new Set(arr)];
}
