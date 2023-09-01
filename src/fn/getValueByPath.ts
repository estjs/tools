import { isArray, isPlainObject } from '../is/isType';

type Data = Record<string, any>;

/**
 * 根据对象属性路径，获取属性值
 * @param obj 数据对象
 * @param path 对象属性路径
 * @returns 属性值
 */
export const getValueByPath = <T = any>(
  obj: Data | undefined,
  path: string | undefined,
): T | undefined => {
  if (!obj || !path) {
    return undefined;
  }

  const keys = path.split('.');
  if (keys.length === 0) {
    return undefined;
  }

  let temp = obj;

  for (let i = 0; i < keys.length; i++) {
    if ((!isPlainObject(temp) && !isArray(temp)) || !keys[i]) {
      return undefined;
    }
    if (i !== keys.length - 1) {
      temp = temp[keys[i]];
    } else {
      return temp[keys[i]] as T;
    }
  }

  return undefined;
};

/**
 * 根据对象属性路径，设置属性值
 * @param obj 数据对象
 * @param path 对象属性路径
 * @param value 属性值
 */
export const setValueByPath = (obj: Data | undefined, path: string | undefined, value: any) => {
  if (!obj || !path) {
    return;
  }

  const keys = path.split('.');
  if (keys.length === 0) {
    return;
  }

  let temp = obj;

  for (let i = 0; i < keys.length; i++) {
    if ((!isPlainObject(temp) && !isArray(temp)) || !keys[i]) {
      return;
    }
    if (i !== keys.length - 1) {
      temp = temp[keys[i]];
    } else {
      temp[keys[i]] = value;
    }
  }
};
