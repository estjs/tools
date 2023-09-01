/**
 * 节流函数
 * @param func
 * @param wait
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
