import { describe, expect, it } from 'vitest';
import { groupBy } from '../groupBy';

describe('groupBy', () => {
  it('should group array elements by property', () => {
    const users = [
      { role: 'admin', name: 'John' },
      { role: 'user', name: 'Jane' },
      { role: 'admin', name: 'Mike' },
      { role: 'user', name: 'Sarah' },
    ];

    const result = groupBy(users, 'role');
    expect(result).toEqual({
      admin: [
        { role: 'admin', name: 'John' },
        { role: 'admin', name: 'Mike' },
      ],
      user: [
        { role: 'user', name: 'Jane' },
        { role: 'user', name: 'Sarah' },
      ],
    });
  });

  it('should group array elements by function', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = groupBy(numbers, num => (num % 2 === 0 ? 'even' : 'odd'));

    expect(result).toEqual({
      even: [2, 4, 6],
      odd: [1, 3, 5],
    });
  });

  it('should handle empty arrays', () => {
    const result = groupBy([], 'key');
    expect(result).toEqual({});
  });

  it('should handle arrays with one element', () => {
    const arr = [{ type: 'test', value: 1 }];
    const result = groupBy(arr, 'type');
    expect(result).toEqual({
      test: [{ type: 'test', value: 1 }],
    });
  });

  it('should handle function that returns different types', () => {
    const items = [{ value: 1 }, { value: 'string' }, { value: true }];

    const result = groupBy(items, item => typeof item.value);
    expect(result).toEqual({
      number: [{ value: 1 }],
      string: [{ value: 'string' }],
      boolean: [{ value: true }],
    });
  });

  it('should handle undefined and null values', () => {
    const items = [
      { type: undefined, value: 1 },
      { type: null, value: 2 },
      { type: 'defined', value: 3 },
    ];

    const result = groupBy(items, 'type');
    expect(result).toHaveProperty('undefined');
    expect(result).toHaveProperty('null');
    expect(result).toHaveProperty('defined');
  });

  it('should handle complex nested properties', () => {
    const items = [
      { info: { category: 'A' }, value: 1 },
      { info: { category: 'B' }, value: 2 },
      { info: { category: 'A' }, value: 3 },
    ];

    const result = groupBy(items, item => item.info.category);
    expect(result).toEqual({
      A: [
        { info: { category: 'A' }, value: 1 },
        { info: { category: 'A' }, value: 3 },
      ],
      B: [{ info: { category: 'B' }, value: 2 }],
    });
  });
});
