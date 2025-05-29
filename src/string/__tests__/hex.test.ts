import { stringToHex } from '../hex';

describe('stringToHex', () => {
  it('basic usage', () => {
    expect(stringToHex('abc')).toBe('616263');
    expect(stringToHex('')).toBe('');
  });

  it('non-ASCII characters', () => {
    expect(stringToHex('你好')).toBe('4f60597d');
    expect(stringToHex('©')).toBe('a9');
  });

  it('numbers and symbols', () => {
    expect(stringToHex('123')).toBe('313233');
    expect(stringToHex('!@#')).toBe('214023');
  });

  it('null and undefined', () => {
    expect(stringToHex(null as any)).toBe('');
    expect(stringToHex(undefined as any)).toBe('');
  });
});
