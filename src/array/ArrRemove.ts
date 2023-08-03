/**
 *  delete array item
 * @param arr
 * @param item
 * @returns
 */

import { isArray } from '../is/isType';

export function ArrRemove<T extends any[]>(arr: T, item: T[number]): T[] {
  if (!isArray(arr)) {
    return arr;
  }

  if (arr.length === 0) {
    return arr;
  }
  const index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
    return arr;
  } else {
    return arr;
  }
}
