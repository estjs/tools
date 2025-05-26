import { describe, expect, it } from 'vitest';
import { deepClone } from '../deepClone';

describe('deepClone', () => {
  it('should clone primitive values', () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  it('should clone Date objects', () => {
    const date = new Date();
    const cloned = deepClone(date);
    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
  });

  it('should clone arrays', () => {
    const arr = [1, 'two', { three: 3 }];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[2]).not.toBe(arr[2]);
  });

  it('should clone nested objects', () => {
    const obj = {
      name: 'John',
      profile: {
        age: 30,
        hobbies: ['reading', 'gaming'],
        address: {
          city: 'New York',
          country: 'USA'
        }
      }
    };
    const cloned = deepClone(obj);

    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.profile).not.toBe(obj.profile);
    expect(cloned.profile.hobbies).not.toBe(obj.profile.hobbies);
    expect(cloned.profile.address).not.toBe(obj.profile.address);
  });

  it('should handle empty objects and arrays', () => {
    expect(deepClone({})).toEqual({});
    expect(deepClone([])).toEqual([]);
  });

  it('should preserve object prototype chain', () => {
    class Person {
      constructor(public name: string) {}
    }
    const person = new Person('John');
    const cloned = deepClone(person);
    expect(cloned).toEqual(person);
  });

  it('should handle mixed nested structures', () => {
    const complex = {
      array: [1, { nested: true }, [2, 3]],
      date: new Date(),
      object: {
        null: null,
        undefined: undefined,
        number: 42
      }
    };
    const cloned = deepClone(complex);

    expect(cloned).toEqual(complex);
    expect(cloned.array).not.toBe(complex.array);
    expect(cloned.array[1]).not.toBe(complex.array[1]);
    expect(cloned.array[2]).not.toBe(complex.array[2]);
    expect(cloned.date).not.toBe(complex.date);
    expect(cloned.object).not.toBe(complex.object);
  });
});
