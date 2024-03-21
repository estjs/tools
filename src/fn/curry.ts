type Curry<T extends (...args: any[]) => any> = <TArgs extends any[]>(
  ...args: TArgs
) => TArgs['length'] extends Parameters<T>['length']
  ? ReturnType<T>
  : Curry<(...args: [...Parameters<T>, ...TArgs]) => ReturnType<T>>;

/**
 * Returns a curried version of the given function.
 *
 * @param {Function} f - The function to be curried.
 * @return {Function} - The curried function.
 */
export function curry<T extends (...args: any[]) => any>(f: T): Curry<T> {
  const g = (...args: any[]) => {
    if (args.length >= f.length) {
      return f(...args);
    }

    return (...more: any[]) => {
      return g(...args, ...more);
    };
  };
  return g as Curry<T>;
}
