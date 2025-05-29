import { describe, expect, it, vi } from 'vitest';
import { compose, memoize, once } from '../function';

describe('function utilities', () => {
  describe('memoize', () => {
    it('should memoize function results', () => {
      const fn = vi.fn((x: number) => x * 2);
      const memoized = memoize(fn);

      expect(memoized(2)).toBe(4);
      expect(memoized(2)).toBe(4);
      expect(fn).toBeCalledTimes(1);
    });
  });

  describe('once', () => {
    it('should call function only once', () => {
      const fn = vi.fn();
      const onceFn = once(fn);

      onceFn();
      onceFn();
      onceFn();

      expect(fn).toBeCalledTimes(1);
    });
  });

  describe('compose', () => {
    it('should compose functions', () => {
      const addOne = (x: number) => x + 1;
      const double = (x: number) => x * 2;
      const addOneThenDouble = compose(double, addOne);

      expect(addOneThenDouble(3)).toBe(8);
    });

    it('should handle empty composition', () => {
      const identity = compose();
      expect(identity(5)).toBe(5);
    });

    it('should handle single function', () => {
      const double = (x: number) => x * 2;
      const composed = compose(double);
      expect(composed(5)).toBe(10);
    });
  });
});
