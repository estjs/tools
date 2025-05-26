import { expect } from 'vitest';
import {
  isArray,
  isBool,
  isDate,
  isEmail,
  isFn,
  isIdCard,
  isMap,
  isMobile,
  isNaN,
  isNull,
  isNumber,
  isPlainObject,
  isPromise,
  isReg,
  isSet,
  isString,
  isStringNumber,
  isSymbol,
  isUndefined,
  isWeakMap,
  isWeakSet,
} from '../';

describe('is type', () => {
  it('is isArray', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(123)).toBe(false);
  });
  it('is isBool', () => {
    expect(isBool(false)).toBe(true);
    expect(isBool(true)).toBe(true);
    expect(isBool(1)).toBe(false);
  });
  it('is string number', () => {
    expect(isStringNumber('123.123')).toBe(true);
    expect(isStringNumber('123.123e3')).toBe(true);
    expect(isStringNumber('123')).toBe(true);
    expect(isStringNumber(123)).toBe(false);
    expect(isStringNumber(123.123)).toBe(false);
    expect(isStringNumber(123.123e3)).toBe(false);
  });
  it('is isDate', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(123)).toBe(false);
  });
  it('is isFn', () => {
    expect(isFn(() => {})).toBe(true);
    expect(isFn(new Function())).toBe(true);
  });
  it('is isMap', () => {
    expect(isMap(new Map())).toBe(true);
  });
  it('is isNaN', () => {
    expect(isNaN(Number.NaN)).toBe(true);
    expect(isNaN(1)).toBe(false);
  });
  it('is isNull', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(0)).toBe(false);
  });
  it('is isNumber', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(Number.NaN)).toBe(false);
    expect(isNumber(Number.POSITIVE_INFINITY)).toBe(true);
    expect(isNumber(1e3)).toBe(true);
    expect(isNumber(1.3)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(0.000000000000000000000001)).toBe(true);
    expect(isNumber('1')).toBe(false);
  });
  it('is isPlainObject', () => {
    expect(isPlainObject({})).toBe(true);
  });
  it('is isPromise', () => {
    expect(isPromise(new Promise(() => {}))).toBe(true);
    expect(isPromise(Promise.resolve())).toBe(true);
  });
  it('is isReg', () => {
    expect(isReg(/w/)).toBe(true);
  });
  it('is isSet', () => {
    expect(isSet(new Set())).toBe(true);
  });
  it('is isString', () => {
    expect(isString('123')).toBe(true);
  });
  it('is isSymbol', () => {
    expect(isSymbol(Symbol('test'))).toBe(true);
  });
  it('is isUndefined', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
  });
  it('is isWeakMap', () => {
    expect(isWeakMap(new WeakMap())).toBe(true);
  });
  it('is isWeakSet', () => {
    expect(isWeakSet(new WeakSet())).toBe(true);
  });
});
describe('is other', () => {
  it('is email', () => {
    expect(isEmail(123)).toBe(false);
    expect(isEmail('jiangxd2016@gmail.com')).toBe(true);
    expect(isEmail('123456@qq.com')).toBe(true);
    expect(isEmail('123456@xxxxx.xxxxxx')).toBe(true);
    expect(isEmail('@xxxxx.xxxxxx')).toBe(false);
  });

  it('is isIdCard', () => {
    expect(isIdCard('123')).toBe(false);
  });

  it('is isMobile', () => {
    expect(isMobile('123')).toBe(false);
    expect(isMobile('11111111111')).toBe(false);
    expect(isMobile('13813813838')).toBe(true);
  });
});
