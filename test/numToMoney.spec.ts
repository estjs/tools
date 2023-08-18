import { numToMoney } from '../src';

describe('numToMoney', () => {
  it('should work with number', () => {
    expect(numToMoney(123)).toBe('123');
    expect(numToMoney(123456)).toBe('123,456');
    expect(numToMoney(123456789)).toBe('123,456,789');

    expect(numToMoney(123.123)).toBe('123.12');
    expect(numToMoney(123456.123)).toBe('123,456.12');
    expect(numToMoney(123456789.123)).toBe('123,456,789.12');

    expect(numToMoney(123.123456, 3)).toBe('123.123');
    expect(numToMoney(123456.123456, 4)).toBe('123,456.1235');
    expect(numToMoney(123456789.123456, 5)).toBe('123,456,789.12346');
  });
});
