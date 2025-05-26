import { describe, expect, it } from 'vitest';
import { filterObjectByKeys } from '../filter';

describe('filterObjectByKeys', () => {
  it('should remove keys starting with _', () => {
    const obj = { name: 'Alice', _private: 123, age: 20 };
    expect(filterObjectByKeys(obj)).toEqual({ name: 'Alice', age: 20 });
  });

  it('should trim string values by default', () => {
    const obj = { name: ' Alice ', city: ' New York ' };
    expect(filterObjectByKeys(obj)).toEqual({ name: 'Alice', city: 'New York' });
  });

  it('should not trim string values if trim is false', () => {
    const obj = { name: ' Alice ', city: ' New York ' };
    expect(filterObjectByKeys(obj, false)).toEqual({ name: ' Alice ', city: ' New York ' });
  });

  it('should handle empty object', () => {
    expect(filterObjectByKeys({})).toEqual({});
  });

  it('should ignore undefined values', () => {
    const obj = { name: undefined, age: 18 };
    expect(filterObjectByKeys(obj)).toEqual({ age: 18 });
  });

  it('should handle nested objects (but only at top level)', () => {
    const obj = { name: 'Alice', info: { city: 'NY' }, _meta: 1 };
    expect(filterObjectByKeys(obj)).toEqual({ name: 'Alice', info: { city: 'NY' } });
  });
}); 
