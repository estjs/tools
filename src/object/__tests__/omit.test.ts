import { describe, expect, it } from 'vitest';
import { omit } from '../omit';

describe('omit', () => {
  it('should create a new object without specified properties', () => {
    const obj = { name: 'John', age: 30, email: 'john@example.com' };
    const result = omit(obj, ['email']);
    expect(result).toEqual({ name: 'John', age: 30 });
  });

  it('should handle non-existent keys', () => {
    const obj = { name: 'John', age: 30 };
    const result = omit(obj, ['email'] as any);
    expect(result).toEqual({ name: 'John', age: 30 });
  });

  it('should handle empty object', () => {
    const obj = {};
    const result = omit(obj, ['name'] as any);
    expect(result).toEqual({});
  });

  it('should not modify the original object', () => {
    const obj = { name: 'John', age: 30, email: 'john@example.com' };
    const original = { ...obj };
    omit(obj, ['email']);
    expect(obj).toEqual(original);
  });

  it('should handle multiple keys to omit', () => {
    const obj = { name: 'John', age: 30, email: 'john@example.com', role: 'admin' };
    const result = omit(obj, ['email', 'role']);
    expect(result).toEqual({ name: 'John', age: 30 });
  });
});
