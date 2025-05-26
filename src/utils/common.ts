import type { StringNumber } from '../types';

export const _toString = Object.prototype.toString;

/**
 * Checks if a value is null or undefined
 * @param value Value to check
 * @returns Whether the value is null or undefined
 * @example
 * ```ts
 * isNil(null); // true
 * isNil(undefined); // true
 * isNil(0); // false
 * ```
 */
export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * Checks if a value is a plain object
 * @param value Value to check
 * @returns Whether the value is a plain object
 * @example
 * ```ts
 * isPlainObject({}); // true
 * isPlainObject(new Date()); // false
 * isPlainObject(null); // false
 * ```
 */
export function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}

/**
 * Checks if a value is a promise
 * @param value Value to check
 * @returns Whether the value is a promise
 * @example
 * ```ts
 * isPromise(Promise.resolve()); // true
 * isPromise({ then: () => {} }); // true
 * isPromise({}); // false
 * ```
 */
export function isPromise(value: unknown): value is Promise<unknown> {
  return value instanceof Promise || (!!value && typeof (value as any).then === 'function');
}

/**
 * Checks if a value is a function
 * @param value Value to check
 * @returns Whether the value is a function
 * @example
 * ```ts
 * isFunction(() => {}); // true
 * isFunction(class {}); // true
 * isFunction({}); // false
 * ```
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

/**
 * Checks if a value is a string
 * @param value Value to check
 * @returns Whether the value is a string
 * @example
 * ```ts
 * isString(''); // true
 * isString(new String('')); // true
 * isString(123); // false
 * ```
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Checks if a value is a number
 * @param value Value to check
 * @returns Whether the value is a number
 * @example
 * ```ts
 * isNumber(123); // true
 * isNumber(NaN); // false
 * isNumber('123'); // false
 * ```
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Checks if a value is a boolean
 * @param value Value to check
 * @returns Whether the value is a boolean
 * @example
 * ```ts
 * isBoolean(true); // true
 * isBoolean(new Boolean(false)); // true
 * isBoolean(1); // false
 * ```
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean' || value instanceof Boolean;
}

/**
 * Checks if a value is an array
 * @param value Value to check
 * @returns Whether the value is an array
 * @example
 * ```ts
 * isArray([]); // true
 * isArray(new Array()); // true
 * isArray({}); // false
 * ```
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

/**
 * Checks if a value is a date
 * @param value Value to check
 * @returns Whether the value is a date
 * @example
 * ```ts
 * isDate(new Date()); // true
 * isDate('2021-01-01'); // false
 * ```
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}

/**
 * Checks if a value is empty (null, undefined, empty string, empty array, empty object)
 * @param value Value to check
 * @returns Whether the value is empty
 * @example
 * ```ts
 * isEmpty(null); // true
 * isEmpty(''); // true
 * isEmpty([]); // true
 * isEmpty({}); // true
 * isEmpty(' '); // false
 * ```
 */
export function isEmpty(value: unknown): boolean {
  if (isNil(value)) {
    return true;
  }
  if (isString(value)) {
    return value.length === 0;
  }
  if (isArray(value)) {
    return value.length === 0;
  }
  if (isPlainObject(value)) {
    return Object.keys(value).length === 0;
  }
  return false;
}

/**
 * Generates a random integer between min and max (inclusive)
 * @param min Minimum value
 * @param max Maximum value
 * @returns Random integer
 * @example
 * ```ts
 * random(1, 10); // Random number between 1 and 10
 * random(0, 1); // 0 or 1
 * ```
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Delays execution for a specified number of milliseconds
 * @param ms Number of milliseconds to delay
 * @returns Promise that resolves after the delay
 * @example
 * ```ts
 * await delay(1000); // Wait for 1 second
 * ```
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Checks if a value is an object (not null and typeof 'object')
 * @param val Value to check
 * @returns Whether the value is an object
 * @example
 * ```ts
 * isObject({}); // true
 * isObject(null); // false
 * isObject([]); // true
 * ```
 */
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object';

/**
 * Checks if a value is a Blob
 * @param val Value to check
 * @returns Whether the value is a Blob
 * @example
 * ```ts
 * isBlob(new Blob()); // true
 * isBlob({}); // false
 * ```
 */
export function isBlob(val: unknown): val is Blob {
  return _toString.call(val) === '[object Blob]';
}

/**
 * Checks if a value is a boolean (primitive)
 * @param value Value to check
 * @returns Whether the value is a boolean
 * @example
 * ```ts
 * isBool(true); // true
 * isBool(false); // true
 * isBool(1); // false
 * ```
 */
export function isBool(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Checks if a value is a function
 * @param val Value to check
 * @returns Whether the value is a function
 * @example
 * ```ts
 * isFn(() => {}); // true
 * isFn({}); // false
 * ```
 */
export function isFn(val: unknown): val is Function {
  return typeof val === 'function';
}

/**
 * Checks if a value is a Map
 * @param val Value to check
 * @returns Whether the value is a Map
 * @example
 * ```ts
 * isMap(new Map()); // true
 * isMap({}); // false
 * ```
 */
export function isMap(val: unknown): val is Map<unknown, unknown> {
  return _toString.call(val) === '[object Map]';
}

/**
 * Checks if a value is NaN
 * @param val Value to check
 * @returns Whether the value is NaN
 * @example
 * ```ts
 * isNaN(NaN); // true
 * isNaN(123); // false
 * ```
 */
export function isNaN(val: unknown) {
  return Number.isNaN(val);
}

/**
 * Checks if a value is null
 * @param val Value to check
 * @returns Whether the value is null
 * @example
 * ```ts
 * isNull(null); // true
 * isNull(undefined); // false
 * ```
 */
export function isNull(val: unknown): val is null {
  return val === null;
}

/**
 * Checks if a value is a RegExp
 * @param val Value to check
 * @returns Whether the value is a RegExp
 * @example
 * ```ts
 * isReg(/abc/); // true
 * isReg('abc'); // false
 * ```
 */
export function isReg(val: unknown): val is RegExp {
  return typeof val === 'object' && val?.constructor === RegExp;
}

/**
 * Checks if a value is a Set
 * @param val Value to check
 * @returns Whether the value is a Set
 * @example
 * ```ts
 * isSet(new Set()); // true
 * isSet([]); // false
 * ```
 */
export function isSet(val: unknown): val is Set<unknown> {
  return _toString.call(val) === '[object Set]';
}

/**
 * Checks if a value is a symbol
 * @param val Value to check
 * @returns Whether the value is a symbol
 * @example
 * ```ts
 * isSymbol(Symbol('test')); // true
 * isSymbol('test'); // false
 * ```
 */
export function isSymbol(val: unknown): val is symbol {
  return typeof val === 'symbol';
}

/**
 * Checks if a value is undefined
 * @param val Value to check
 * @returns Whether the value is undefined
 * @example
 * ```ts
 * isUndefined(undefined); // true
 * isUndefined(null); // false
 * ```
 */
export function isUndefined(val: unknown): val is undefined {
  return typeof val === 'undefined';
}

/**
 * Checks if a value is a WeakMap
 * @param val Value to check
 * @returns Whether the value is a WeakMap
 * @example
 * ```ts
 * isWeakMap(new WeakMap()); // true
 * isWeakMap({}); // false
 * ```
 */
export function isWeakMap(val: unknown): val is WeakMap<object, unknown> {
  return _toString.call(val) === '[object WeakMap]';
}

/**
 * Checks if a value is a WeakSet
 * @param val Value to check
 * @returns Whether the value is a WeakSet
 * @example
 * ```ts
 * isWeakSet(new WeakSet()); // true
 * isWeakSet([]); // false
 * ```
 */
export function isWeakSet(val: unknown): val is WeakSet<object> {
  return _toString.call(val) === '[object WeakSet]';
}

/**
 * Checks if a value is a File
 * @param val Value to check
 * @returns Whether the value is a File
 * @example
 * ```ts
 * isFile(new File([], 'test.txt')); // true
 * isFile({}); // false
 * ```
 */
export function isFile(val: unknown): val is File {
  return _toString.call(val) === '[object File]';
}

/**
 * Checks if a string is a valid number string
 * @deprecated Use isNumberStr instead
 * @param val Value to check
 * @returns Whether the value is a valid number string
 * @example
 * ```ts
 * isStringNumber('123'); // true
 * isStringNumber('abc'); // false
 * ```
 */
export function isStringNumber(val: unknown): val is StringNumber {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
}

/**
 * Checks if a string is a valid number string (regex)
 * @param str String to check
 * @returns Whether the string is a valid number string
 * @example
 * ```ts
 * isNumberStr('123'); // true
 * isNumberStr('abc'); // false
 * ```
 */
export function isNumberStr(str: string): str is StringNumber {
  return /^[+-]?(0|([1-9]\d*))(\.\d+)?$/.test(str);
}

/**
 * Checks if running in a browser environment
 * @returns Whether running in a browser
 * @example
 * ```ts
 * isBower(); // true if in browser, false otherwise
 * ```
 */
export function isBower(): boolean {
  return typeof window === 'object';
}

/**
 * Checks if a string is all lowercase
 * @param str String to check
 * @returns Whether the string is all lowercase
 * @example
 * ```ts
 * isLowerCase('abc'); // true
 * isLowerCase('Abc'); // false
 * ```
 */
export function isLowerCase(str: string) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * Checks if a string is all uppercase
 * @param str String to check
 * @returns Whether the string is all uppercase
 * @example
 * ```ts
 * isUpperCase('ABC'); // true
 * isUpperCase('Abc'); // false
 * ```
 */
export function isUpperCase(str: string) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * Checks if a function is an async function
 * @param fn Function to check
 * @returns Whether the function is async
 * @example
 * ```ts
 * isAsyncFn(async () => {}); // true
 * isAsyncFn(() => {}); // false
 * ```
 */
export function isAsyncFn(fn: Function): fn is (...args: any[]) => Promise<any> {
  return _toString.call(fn) === '[object AsyncFunction]';
}

/**
 * Checks if a value is a primitive
 * @param value Value to check
 * @returns Whether the value is a primitive
 * @example
 * ```ts
 * isPrimitive('string'); // true
 * isPrimitive(123); // true
 * isPrimitive({}); // false
 * ```
 */
export const isPrimitive = (
  value: unknown,
): value is string | number | boolean | symbol | null | undefined =>
  ['string', 'number', 'boolean', 'symbol', 'null', 'undefined'].includes(typeof value);
