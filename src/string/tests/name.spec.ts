import { isReserved, toKebabCase, toPascalCase } from '../..';

describe('name', () => {
  it('capitalize', () => {
    expect(toKebabCase('testTestTestTestTestTest')).toBe('test-test-test-test-test-test');
    expect(isReserved('_test')).toBe(true);
    expect(isReserved('test')).toBe(false);
    expect(toPascalCase('test-test-test')).toBe('TestTestTest');
  });
});
