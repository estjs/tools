/**
 * Creates a throttled function that only invokes the provided function at most once per specified wait time.
 * @template T - The type of the function to throttle.
 * @param func The function to throttle
 * @param wait The number of milliseconds to wait before allowing the next invocation
 * @returns The throttled function
 * @example
 * ```ts
 * const throttledLog = throttle((msg: string) => console.log(msg), 200);
 * throttledLog('a');
 * throttledLog('b');
 * // Only 'a' will be logged immediately, 'b' will be ignored if within 200ms
 * ```
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let isThrottled = false;

  return function throttled(...args: Parameters<T>): void {
    if (!isThrottled) {
      func(...args);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, wait);
    }
  };
}
