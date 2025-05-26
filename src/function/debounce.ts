/**
 * Creates a debounced function that delays invoking the provided function until after a specified wait time.
 * @template T - The type of the function to debounce.
 * @param func The function to debounce
 * @param wait The number of milliseconds to delay
 * @returns The debounced function
 * @example
 * ```ts
 * const debouncedLog = debounce((msg: string) => console.log(msg), 200);
 * debouncedLog('hello');
 * debouncedLog('world');
 * // Only 'world' will be logged after 200ms
 * ```
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeoutId: number | undefined;

  return function debounced(...args: Parameters<T>): void {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      func(...args);
      timeoutId = undefined;
    }, wait);
  };
}
