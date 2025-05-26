import { describe, expect, it } from 'vitest';
import { set } from '../set';

describe('set', () => {
  it('should set value using dot notation', () => {
    const obj = { user: { profile: { name: 'John' } } };
    set(obj, 'user.profile.name', 'Jane');
    expect(obj.user.profile.name).toBe('Jane');
  });

  it('should set value using array path', () => {
    const obj = { user: { profile: { name: 'John' } } };
    set(obj, ['user', 'profile', 'name'], 'Jane');
    expect(obj.user.profile.name).toBe('Jane');
  });

  it('should create nested objects if they dont exist', () => {
    const obj = { user: {} };
    set(obj, 'user.profile.name', 'John');
    expect(obj.user.profile.name).toBe('John');
    expect(obj).toEqual({
      user: {
        profile: {
          name: 'John',
        },
      },
    });
  });

  it('should handle array paths and create arrays', () => {
    const obj = { user: { profile: {} } };
    set(obj, 'user.profile.hobbies[0]', 'reading');
    expect(obj.user.profile.hobbies[0]).toBe('reading');

    set(obj, 'user.profile.hobbies[2]', 'gaming');
    expect(obj.user.profile.hobbies).toEqual(['reading', undefined, 'gaming']);
  });

  it('should handle numeric path segments', () => {
    const obj: any = {};
    set(obj, 'items[0].name', 'first');
    set(obj, 'items[1].name', 'second');
    expect(obj.items).toEqual([{ name: 'first' }, { name: 'second' }]);
  });

  it('should override non-object values with objects when necessary', () => {
    const obj = {
      user: {
        profile: 'invalid',
      },
    };
    set(obj, 'user.profile.name', 'John');
    expect(obj.user.profile).toEqual({ name: 'John' });
  });

  it('should handle empty or invalid paths', () => {
    const obj = {};
    set(obj, '', 'value');
    expect(obj).toEqual({});

    set(obj, [], 'value');
    expect(obj).toEqual({});
  });

  it('should handle null and undefined objects', () => {
    expect(set(null as any, 'path', 'value')).toBe(null);
    expect(set(undefined as any, 'path', 'value')).toBe(undefined);
  });

  it('should preserve existing values when setting new ones', () => {
    const obj = {
      user: {
        profile: {
          name: 'John',
          age: 30,
        },
      },
    };
    set(obj, 'user.profile.email', 'john@example.com');
    expect(obj.user.profile).toEqual({
      name: 'John',
      age: 30,
      email: 'john@example.com',
    });
  });

  it('should handle complex mixed paths', () => {
    const obj = {};
    set(obj, 'users[0].profile.addresses[1].city', 'New York');
    expect(obj).toEqual({
      users: [
        {
          profile: {
            addresses: [undefined, { city: 'New York' }],
          },
        },
      ],
    });
  });
});
