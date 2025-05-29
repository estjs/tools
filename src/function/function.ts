import type { AnyFunction } from '../types';

/**
 * Creates a memoized version of a function
 * @param func Function to memoize
 * @returns Memoized function
 * @example
 * ```ts
 * const memoizedFib = memoize((n: number): number => {
 *   if (n <= 1) return n;
 *   return memoizedFib(n - 1) + memoizedFib(n - 2);
 * });
 * ```
 */
export function memoize<T extends AnyFunction>(func: T): T {
  const cache = new Map();

  return function (this: any, ...args: any[]) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  } as T;
}

/**
 * Creates a function that is restricted to invoking func once
 * @param func Function to call once
 * @returns Function that can only be called once
 * @example
 * ```ts
 * const initialize = once(() => {
 *   console.log('Initializing...');
 * });
 * initialize(); // Logs: Initializing...
 * initialize(); // Does nothing
 * ```
 */
export function once<T extends AnyFunction>(func: T): T {
  let called = false;
  let result: any;

  return function (this: any, ...args: any[]) {
    if (!called) {
      called = true;
      result = func.apply(this, args);
    }
    return result;
  } as T;
}

/**
 * Creates a function that is the composition of the provided functions
 * @param funcs Functions to compose
 * @returns Composed function
 * @example
 * ```ts
 * const addOne = (x: number) => x + 1;
 * const double = (x: number) => x * 2;
 * const addOneThenDouble = compose(double, addOne);
 * addOneThenDouble(3); // 8
 * ```
 */
export function compose<T>(...funcs: Array<(arg: T) => T>): (arg: T) => T {
  if (funcs.length === 0) {
    return (arg: T) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (arg: T) => a(b(arg)));
}

/**
 * A no-operation function that does nothing and returns `undefined`.
 * Can be used as a placeholder or default function.
 * @returns {undefined} - Always returns `undefined`.
 *
 * @example
 * const callback = noop; // Assign a default no-op callback
 * callback(); // Does nothing
 */
export const noop: (...args: unknown[]) => unknown = () => {};
