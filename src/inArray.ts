  /**
   * 判断元素是否在数组中存在
   * @param {T} search
   * @param {Array<T>} arr
   * @param {number} index
   * @return {boolean}
   */
   export function inArray<T = any>(search: T, arr: Array<T>, index = 0) {
    if (Array.isArray(arr)) {
      return arr.includes(search, index);
    } else {
      return false;
    }
  }
