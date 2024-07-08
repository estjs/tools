export function uniqueArray<T extends any[]>(arr: T) {
  if (!Array.isArray(arr)) {
    throw new TypeError('The first parameter must be an array');
  }
  if (arr.length === 1) {
    return arr;
  }

  return [...new Set(arr)];
}
export function mergeArraysByUniqueKey<T, K extends keyof T>(arr1: T[], arr2: T[], key: K): T[] {
  const map = new Map<T[K], T>();

  arr1.forEach(item => {
    map.set(item[key], item);
  });

  arr2.forEach(item => {
    map.set(item[key], item);
  });

  return Array.from(map.values());
}
