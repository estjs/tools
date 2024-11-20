/**
 * Curries a function, allowing it to be called with fewer arguments than it expects.
 * @template T - The type of the function to be curried.
 * @param {T} fn - The function to be curried.
 * @returns {Curry<T>} - The curried function.
 * 
 * 
 * 
 * @example
 * const add = (a: number, b: number) => a + b;
 * const curriedAdd = curry(add);
 * curriedAdd(1)(2); // 3
 * 
 * @example
 * const add = (a: number, b: number, c: number) => a + b + c;
 * const curriedAdd = createCurriedFunction(add);
 * 
 * console.log(curriedAdd(1)(2)(3)); // 6
 * console.log(curriedAdd(1, 2)(3)); // 6
 * console.log(curriedAdd(1)(2, 3)); // 6
 *
 */
type Curry<T extends (...args: any[]) => any> = <TArgs extends any[]>(
  ...args: TArgs
) => TArgs['length'] extends Parameters<T>['length']
  ? ReturnType<T>
  : Curry<(...args: [...Parameters<T>, ...TArgs]) => ReturnType<T>>;

export function curry<T extends (...args: any[]) => any>(fn: T): Curry<T> {
  const curried = (...args: any[]) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...more: any[]) => curried(...args, ...more);
  };
  return curried as Curry<T>;
} 
