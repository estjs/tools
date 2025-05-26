/**
 * Curries a function, allowing it to be called with fewer arguments than it expects.
 * @param fn The original function to curry
 * @returns The curried function
 * @example
 * const add = (a: number, b: number) => a + b;
 * const curriedAdd = curry(add);
 * curriedAdd(1)(2); // 3
 *
 * const sum = (a: number, b: number, c: number) => a + b + c;
 * const curriedSum = curry(sum);
 * curriedSum(1)(2)(3); // 6
 * curriedSum(1, 2)(3); // 6
 * curriedSum(1)(2, 3); // 6
 */
export function curry<T extends (...args: any[]) => any>(fn: T): any {
  return function curried(...args: any[]): any {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...more: any[]) => curried(...args, ...more);
  };
}
