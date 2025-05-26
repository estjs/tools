import { describe, expect, it } from 'vitest';
import { chunk } from '../chunk';

describe('chunk', () => {
  it('should split array into chunks of specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  it('should handle empty arrays', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it('should handle chunk size equal to array length', () => {
    expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });

  it('should handle chunk size greater than array length', () => {
    expect(chunk([1, 2], 3)).toEqual([[1, 2]]);
  });

  it('should throw error for invalid chunk size', () => {
    expect(() => chunk([1, 2, 3], 0)).toThrow('Chunk size must be greater than 0');
    expect(() => chunk([1, 2, 3], -1)).toThrow('Chunk size must be greater than 0');
  });

  it('should handle arrays of different types', () => {
    const arr = [1, 'two', { three: 3 }, [4]];
    expect(chunk(arr, 2)).toEqual([
      [1, 'two'],
      [{ three: 3 }, [4]],
    ]);
  });

  it('should preserve object references', () => {
    const obj = { id: 1 };
    const arr = [obj, obj];
    const result = chunk(arr, 1);

    expect(result[0][0]).toBe(obj);
    expect(result[1][0]).toBe(obj);
  });

  it('should handle large arrays', () => {
    const arr = Array.from({ length: 100 }, (_, i) => i);
    const result = chunk(arr, 10);

    expect(result).toHaveLength(10);
    expect(result[0]).toHaveLength(10);
    expect(result[9]).toHaveLength(10);
  });
});
