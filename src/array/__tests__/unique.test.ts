import { describe, expect, it } from 'vitest';
import { unique } from '../unique';

describe('unique', () => {
  it('should remove duplicates from array of primitives', () => {
    expect(unique([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
    expect(unique(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
    expect(unique([true, false, true])).toEqual([true, false]);
  });

  it('should handle empty arrays', () => {
    expect(unique([])).toEqual([]);
  });

  it('should handle arrays with one element', () => {
    expect(unique([1])).toEqual([1]);
    expect(unique(['a'])).toEqual(['a']);
  });

  it('should remove duplicates from array of objects using key function', () => {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John' },
      { id: 3, name: 'Mike' },
    ];

    const result = unique(users, item => item.id);
    expect(result).toHaveLength(3);
    expect(result.map(u => u.id)).toEqual([1, 2, 3]);
  });

  it('should keep first occurrence when using key function', () => {
    const items = [
      { id: 1, value: 'first' },
      { id: 1, value: 'second' },
    ];

    const result = unique(items, item => item.id);
    expect(result).toHaveLength(1);
    expect(result[0].value).toBe('first');
  });

  it('should handle objects with different shapes using key function', () => {
    const items = [
      { id: 1, name: 'John' },
      { id: 1, email: 'john@example.com' },
      { id: 2, name: 'Jane' },
    ];

    const result = unique(items, item => item.id);
    expect(result).toHaveLength(2);
  });

  it('should handle null and undefined in arrays', () => {
    expect(unique([null, null, undefined, undefined])).toEqual([null, undefined]);
    expect(unique([1, null, 1, undefined, null])).toEqual([1, null, undefined]);
  });
});
