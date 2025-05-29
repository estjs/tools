import { describe, expect, it, vi } from 'vitest';
import { debounce } from '../debounce';

describe('debounce', () => {
  it('should delay function execution', async () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 100);
    debounced('a');
    expect(fn).not.toBeCalled();
    vi.advanceTimersByTime(100);
    expect(fn).toBeCalledWith('a');
    vi.useRealTimers();
  });

  it('should only call the last invocation if called multiple times quickly', async () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 100);
    debounced('a');
    debounced('b');
    debounced('c');
    vi.advanceTimersByTime(100);
    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith('c');
    vi.useRealTimers();
  });

  it('should pass all arguments to the original function', async () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 50);
    debounced('x', 1, true);
    vi.advanceTimersByTime(50);
    expect(fn).toBeCalledWith('x', 1, true);
    vi.useRealTimers();
  });
});
