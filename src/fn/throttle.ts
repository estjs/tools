export function throttle(fn: Function, stop: number) {
  let start = 0;
  return function (this: unknown, args?: unknown) {
    const end = Date.now();
    if (end - start >= stop) {
      const result = fn.call(this, args);
      start = end;
      return result;
    }
  };
}
