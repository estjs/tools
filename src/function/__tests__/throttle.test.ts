import { describe, expect, it, vi } from 'vitest';
import { throttle } from '../throttle';

describe('throttle', () => {
  it('should only call the function at most once per wait period', () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const throttled = throttle(fn, 100);
    throttled('a');
    throttled('b');
    throttled('c');
    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith('a');
    vi.advanceTimersByTime(100);
    throttled('d');
    expect(fn).toBeCalledTimes(2);
    expect(fn).toHaveBeenLastCalledWith('d');
    vi.useRealTimers();
  });

  it('should pass all arguments to the original function', () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const throttled = throttle(fn, 50);
    throttled('x', 1, true);
    expect(fn).toBeCalledWith('x', 1, true);
    vi.useRealTimers();
  });
});
