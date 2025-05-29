import { describe, expect, it } from 'vitest';
import { pick } from '../pick';

describe('pick', () => {
  it('should create a new object with only specified properties', () => {
    const obj = { name: 'John', age: 30, email: 'john@example.com' };
    const result = pick(obj, ['name', 'age']);
    expect(result).toEqual({ name: 'John', age: 30 });
  });

  it('should handle non-existent keys', () => {
    const obj = { name: 'John', age: 30 };
    const result = pick(obj, ['name', 'email'] as any);
    expect(result).toEqual({ name: 'John' });
  });

  it('should handle empty object', () => {
    const obj = {};
    const result = pick(obj, ['name'] as any);
    expect(result).toEqual({});
  });

  it('should not modify the original object', () => {
    const obj = { name: 'John', age: 30, email: 'john@example.com' };
    const original = { ...obj };
    pick(obj, ['name', 'age']);
    expect(obj).toEqual(original);
  });

  it('should handle single key', () => {
    const obj = { name: 'John', age: 30, email: 'john@example.com' };
    const result = pick(obj, ['name']);
    expect(result).toEqual({ name: 'John' });
  });

  it('should handle all keys', () => {
    const obj = { name: 'John', age: 30 };
    const result = pick(obj, ['name', 'age']);
    expect(result).toEqual(obj);
  });
});
