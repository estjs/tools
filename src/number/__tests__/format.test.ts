import { thousands } from '../format';

describe('thousands', () => {
  test('基本用例', () => {
    expect(thousands(1234567.89)).toBe('1,234,567.89');
    expect(thousands('1234567.89', 1)).toBe('1,234,567.9');
  });
});

