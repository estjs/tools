// Import the function to test

import { shallowEqualObjects } from "../src";


describe('shallowEqualObjects', () => {
// Test case 1: Objects with the same properties are equal
test('Objects with the same properties are equal', () => {
  const obj1 = { a: 1, b: 'hello', c: { nested: true } };
  const obj2 = { a: 1, b: 'hello', c: { nested: true } };

  expect(shallowEqualObjects(obj1, obj2)).toBe(true);
});

// Test case 2: Objects with different values are not equal
test('Objects with different values are not equal', () => {
  const obj1 = { a: 1, b: 'hello' };
  const obj2 = { a: 1, b: 'world' };

  expect(shallowEqualObjects(obj1, obj2)).toBe(false);
});

// Test case 3: Objects with different properties are not equal
test('Objects with different properties are not equal', () => {
  const obj1 = { a: 1, b: 'hello' };
  const obj2 = { a: 1, c: 'world' };

  expect(shallowEqualObjects(obj1, obj2)).toBe(false);
});

// Test case 4: Objects with null and undefined are not equal
test('Objects with null and undefined are not equal', () => {
  const obj1 = { a: 1, b: 'hello' };
  const obj2 = null;

  expect(shallowEqualObjects(obj1, obj2)).toBe(false);
});

// Test case 5: Objects with the same null values are equal
test('Objects with the same null values are equal', () => {
  const obj1 = null;
  const obj2 = null;

  expect(shallowEqualObjects(obj1, obj2)).toBe(true);
});

// Test case 6: Objects with undefined and null values are not equal
test('Objects with undefined and null values are not equal', () => {
  const obj1 = { a: 1, b: 'hello' };
  const obj2 = undefined;

  expect(shallowEqualObjects(obj1, obj2)).toBe(false);
});
})
