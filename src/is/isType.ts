import { _toString } from '../common';
import type { StringNumber } from '../types';

export function isArray(val: unknown): val is Array<unknown> {
  return Array.isArray(val);
}
export function isBlob(val: unknown): val is Blob {
  return _toString.call(val) === '[object Blob]';
}
export function isBool(value: unknown): value is boolean {
  return typeof value === 'boolean';
}
export function isDate(val: unknown): val is Date {
  return val instanceof Date;
}
export function isFn(val: unknown): val is Function {
  return typeof val === 'function';
}
export function isMap(val: unknown): val is Map<unknown, unknown> {
  return _toString.call(val) === '[object Map]';
}
export function isNaN(val: unknown) {
  return Number.isNaN(val);
}
export function isNull(val: unknown): boolean {
  return val === null;
}
export function isNumber(val: unknown): boolean {
  return typeof val === 'number';
}
export function isPlainObject(val: unknown): boolean {
  return _toString.call(val) === '[object Object]';
}
export function isPromise(val: unknown): boolean {
  return _toString.call(val) === '[object Promise]';
}
export function isReg(val: unknown): val is RegExp {
  return typeof val === 'object' && val?.constructor === RegExp;
}
export function isSet(val: unknown): val is Set<unknown> {
  return _toString.call(val) === '[object Set]';
}
export function isString(val: unknown): val is string {
  return typeof val === 'string';
}
export function isSymbol(val: unknown): val is symbol {
  return typeof val === 'symbol';
}
export function isUndefined(val: unknown): val is undefined {
  return typeof val === 'undefined';
}
export function isWeakMap(val: unknown): val is WeakMap<object, unknown> {
  return _toString.call(val) === '[object WeakMap]';
}
export function isWeakSet(val: unknown): val is WeakSet<object> {
  return _toString.call(val) === '[object WeakSet]';
}
export function isFile(val: unknown): val is File {
  return _toString.call(val) === '[object File]';
}
export function isStringNumber(val: unknown): val is StringNumber {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
}
export function isNumberStr(str: string): str is StringNumber {
  return /^[+-]?(0|([1-9]\d*))(\.\d+)?$/.test(str);
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

// 判断是否是个异步函数
export function isAsyncFn(fn: Function): fn is (...args: any[]) => Promise<any> {
  return _toString.call(fn) === '[object AsyncFunction]';
}
export const isPrimitive = (
  val: unknown,
): val is string | number | boolean | symbol | null | undefined =>
  ['string', 'number', 'boolean', 'symbol', 'null', 'undefined'].includes(typeof val);

/**
 * "If the value is null or undefined, return true, otherwise return false."
 */
export const isNil = (val: unknown): val is null | undefined => val === null || val === undefined;
