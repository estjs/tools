import { localCache, sessionCache } from '../src';

describe('sessionCache', () => {
  beforeEach(() => {
    // 在每个测试之前重置sessionStorage
    sessionStorage.clear();
  });

  test('set and get value', () => {
    const key = 'testKey';
    const value = 'testValue';

    sessionCache.set(key, value);
    const retrievedValue = sessionCache.get(key);

    expect(retrievedValue).toBe(value);
  });

  test('set and get JSON value', () => {
    const key = 'testKey';
    const jsonValue = { name: 'John', age: 30 };

    sessionCache.setJSON(key, jsonValue);
    const retrievedJsonValue = sessionCache.getJSON(key);

    expect(retrievedJsonValue).toEqual(jsonValue);
  });

  test('remove value', () => {
    const key = 'testKey';
    const value = 'testValue';

    sessionCache.set(key, value);
    sessionCache.remove(key);
    const retrievedValue = sessionCache.get(key);

    expect(retrievedValue).toBeNull();
  });

  test('return null for invalid key', () => {
    const key = null;
    const value = 'testValue';

    sessionCache.set(key, value);
    const retrievedValue = sessionCache.get(key);

    expect(retrievedValue).toBeNull();
  });

  test('return null for missing value', () => {
    const key = 'testKey';

    const retrievedValue = sessionCache.get(key);

    expect(retrievedValue).toBeNull();
  });
});

describe('sessionCache', () => {
  beforeEach(() => {
    // 在每个测试之前重置sessionStorage
    localStorage.clear();
  });

  test('set and get value', () => {
    const key = 'testKey';
    const value = 'testValue';

    localCache.set(key, value);
    const retrievedValue = localCache.get(key);

    expect(retrievedValue).toBe(value);
  });

  test('set and get JSON value', () => {
    const key = 'testKey';
    const jsonValue = { name: 'John', age: 30 };

    localCache.setJSON(key, jsonValue);
    const retrievedJsonValue = localCache.getJSON(key);

    expect(retrievedJsonValue).toEqual(jsonValue);
  });

  test('remove value', () => {
    const key = 'testKey';
    const value = 'testValue';

    localCache.set(key, value);
    localCache.remove(key);
    const retrievedValue = localCache.get(key);

    expect(retrievedValue).toBeNull();
  });

  test('return null for invalid key', () => {
    const key = null;
    const value = 'testValue';

    localCache.set(key, value);
    const retrievedValue = localCache.get(key);

    expect(retrievedValue).toBeNull();
  });

  test('return null for missing value', () => {
    const key = 'testKey';

    const retrievedValue = localCache.get(key);

    expect(retrievedValue).toBeNull();
  });
});
