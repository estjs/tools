import { toThousands } from '../src';

describe('toThousands', () => {
  it('should work with number', () => {
    expect(toThousands(123)).toBe('123');
    expect(toThousands(123456)).toBe('123,456');
    expect(toThousands(123456789)).toBe('123,456,789');

    expect(toThousands(123.123)).toBe('123.12');
    expect(toThousands(123456.123)).toBe('123,456.12');
    expect(toThousands(123456789.123)).toBe('123,456,789.12');

    expect(toThousands(123.123456, 3)).toBe('123.123');
    expect(toThousands(123456.123456, 4)).toBe('123,456.1235');
    expect(toThousands(123456789.123456, 5)).toBe('123,456,789.12346');
  });
});
