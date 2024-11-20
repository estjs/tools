/**
 * Creates a throttled function that only invokes the provided function at most once per specified wait time.
 * @template T - The type of the function to throttle.
 * @param {T} func - The function to throttle.
 * @param {number} wait - The number of milliseconds to wait before allowing the next invocation.
 * @returns {(...args: Parameters<T>) => void} - The throttled function.
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
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
