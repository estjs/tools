/**
 * 在一个对象数组中，根据指定的属性值去重。
 *
 * @param arr 对象数组
 * @param key 属性名称
 * @returns 去重后的对象数组
 */
export function uniqueArrayObject<T extends Record<string, any>>(arr: T[], key: keyof T): T[] {
  if (arr.length === 0) { return []; }
  let list: T[] = [];
  const map: Record<string, T> = {};
  arr.forEach((item) => {
    if (!map[item[key]]) {
      map[item[key]] = item;
    }
  });
  list = Object.values(map);
  return list;
}
