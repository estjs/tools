import { describe, expect, it } from 'vitest';
import { get } from '../get';

describe('get', () => {
  const testObj = {
    user: {
      profile: {
        name: 'John',
        age: 30,
        address: {
          city: 'New York',
          country: 'USA',
        },
        hobbies: ['reading', 'gaming'],
      },
      settings: {
        theme: 'dark',
      },
    },
    numbers: [1, 2, { value: 3 }],
    nullValue: null,
    falseValue: false,
    zeroValue: 0,
  };

  it('should get value using dot notation', () => {
    expect(get(testObj, 'user.profile.name')).toBe('John');
    expect(get(testObj, 'user.settings.theme')).toBe('dark');
    expect(get(testObj, 'user.profile.address.city')).toBe('New York');
  });

  it('should get value using array path', () => {
    expect(get(testObj, ['user', 'profile', 'name'])).toBe('John');
    expect(get(testObj, ['user', 'settings', 'theme'])).toBe('dark');
    expect(get(testObj, ['user', 'profile', 'address', 'city'])).toBe('New York');
  });

  it('should return default value for non-existent paths', () => {
    expect(get(testObj, 'user.profile.email', 'no email')).toBe('no email');
    expect(get(testObj, 'user.preferences', {})).toEqual({});
    expect(get(testObj, 'nonexistent.path', null)).toBe(null);
  });

  it('should handle arrays in path', () => {
    expect(get(testObj, 'numbers.0')).toBe(1);
    expect(get(testObj, 'numbers.2.value')).toBe(3);
    expect(get(testObj, ['numbers', '1'])).toBe(2);
    expect(get(testObj, 'user.profile.hobbies.0')).toBe('reading');
  });

  it('should handle null and undefined values', () => {
    expect(get(testObj, 'nullValue.prop', 'default')).toBe('default');
    expect(get(testObj, 'undefinedValue', 'default')).toBe('default');
    expect(get(testObj, 'nullValue.deep.path', 'default')).toBe('default');
  });

  it('should handle falsy values correctly', () => {
    expect(get(testObj, 'falseValue')).toBe(false);
    expect(get(testObj, 'zeroValue')).toBe(0);
    expect(get(testObj, 'falseValue', true)).toBe(false);
    expect(get(testObj, 'zeroValue', 1)).toBe(0);
  });

  it('should handle empty path segments', () => {
    expect(get(testObj, '')).toBe(undefined);
    expect(get(testObj, [], 'default')).toBe('default');
    expect(get(testObj, 'user..profile.name', 'default')).toBe('default');
  });

  it('should handle non-object values in path', () => {
    expect(get(testObj, 'user.profile.name.invalid.path', 'default')).toBe('default');
    expect(get(testObj, 'numbers.0.invalid', 'default')).toBe('default');
  });
});
