import { _toString } from '../common';
import type { StringNumber } from '../types';

export function isArray(val: any): boolean {
  return Array.isArray(val);
}
export function isBlob(val: any): boolean {
  return _toString.call(val) === '[object Blob]';
}
export function isBool(value: any): boolean {
  return typeof value === 'boolean';
}
export function isDate(d: any): boolean {
  return d instanceof Date;
}
export function isFn(val: any): boolean {
  return typeof val === 'function';
}
export function isMap(val: any): boolean {
  return _toString.call(val) === '[object Map]';
}
export function isNaN(val: any): boolean {
  return (
    Number.isNaN ||
    function isNaN(input) {
      return typeof input === 'number' && input !== input;
    }
  )(val);
}
export function isNull(val: any): boolean {
  return val === null;
}
export function isNumber(val: any): boolean {
  return typeof val === 'number';
}
export function isPlainObject(val: any): boolean {
  return _toString.call(val) === '[object Object]';
}
export function isPromise(val: any): boolean {
  return _toString.call(val) === '[object Promise]';
}
export function isReg(val: any): boolean {
  return typeof val === 'object' && val.constructor === RegExp;
}
export function isSet(val: any): boolean {
  return _toString.call(val) === '[object Set]';
}
export function isString(val: any): boolean {
  return typeof val === 'string';
}
export function isSymbol(val: any): boolean {
  return typeof val === 'symbol';
}
export function isUndefined(val: any): boolean {
  return typeof val === 'undefined';
}
export function isWeakMap(val: any): boolean {
  return _toString.call(val) === '[object WeakMap]';
}
export function isWeakSet(val: any): boolean {
  return _toString.call(val) === '[object WeakSet]';
}
export function isFile(val: any): boolean {
  return _toString.call(val) === '[object File]';
}
export function isStringNumber(val: any): val is StringNumber {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
}
export function isNumberStr(str: string): str is StringNumber {
  return /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(str);
}

export function isBower() {
  return typeof window === 'object';
}

// 判断字符串是否为纯小写
export function isLowerCase(str: string) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

// 判断字符串是否为纯大写
export function isUpperCase(str: string) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}
