import { isEmptyObj } from '../is/isEmpty';
import { isPlainObject } from '../is/isType';

/**
 * filter value
 * @param input {Record<string,any>}
 * @param deep {boolean}
 * @returns {Record<string,any>}
 */
export function filterNotValue(input: Record<string, any>, deep = false): Record<string, any> {
  if (!input || !isPlainObject(input)) {
    return input;
  }

  const output: Record<string, any> = {};
  for (const [key, value] of Object.entries(input)) {
    if (!value) {
      continue;
    }

    const filteredValue = isPlainObject(value) && deep ? filterNotValue(value, deep) : value;
    if (!isPlainObject(filteredValue)) {
      output[key] = filteredValue;
      continue;
    }
    // 如果值不为空，则保留该值
    if (!isEmptyObj(filteredValue)) {
      output[key] = filteredValue;
    }
  }

  return output;
}
