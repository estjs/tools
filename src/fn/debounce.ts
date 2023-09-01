/**
 * 防抖函数
 * @param func
 * @param wait
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
