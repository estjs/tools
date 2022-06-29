import { _toString } from '../common';


export function isArray(o: any): boolean {
  return Array.isArray(o);
}
export function isBlob(o: any): boolean {
  return _toString.call(o) === '[object Blob]';
}
export function isBool(value: any): boolean {
  return typeof value === 'boolean';
}
export function isDate(d: any): boolean {
  return d instanceof Date;
}
export function isFn(o: any): boolean {
  return typeof o === 'function';
}
export function isMap(o: any): boolean {
  return _toString.call(o) === '[object Map]';
}
export function isNaN(o: any): boolean {
  return typeof o !== 'number'
    ? false
    : isNaN(o);
}
export function isNull(o: any): boolean {
  return o === null;
}
export function isNumber(o: any): boolean {
  return typeof o === 'number';
}
export function isPlainObject(o: any): boolean {
  return _toString.call(o) === '[object Object]';
}
export function isPromise(o: any): boolean {
  return _toString.call(o) === '[object Promise]';
}
export function isReg(o: any): boolean {
  return typeof o === 'object' && o.constructor === RegExp;
}
export function isSet(o: any): boolean {
  return _toString.call(o) === '[object Set]';
}
export function isStr(o: any): boolean {
  return typeof o === 'string';
}
export function isSymbol(o: any): boolean {
  return typeof o === 'symbol';
}
export function isUndefined(o: any): boolean {
  return typeof o === 'undefined';
}
export function isWeakMap(o: any): boolean {
  return _toString.call(o) === '[object WeakMap]';
}
export function isWeakSet(o: any): boolean {
  return _toString.call(o) === '[object WeakSet]';
}
export function isFile(o: any): boolean {
  return _toString.call(o) === '[object File]';
}
