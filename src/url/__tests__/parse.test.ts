import { describe, expect, it } from 'vitest';
import { getHash, getPathname, getQuery, parseQuery, parseURL } from '../parse';

describe('uRL parsing', () => {
  describe('parseQuery', () => {
    it('should parse simple query parameters', () => {
      expect(parseQuery('?foo=bar&baz=123')).toEqual({
        foo: 'bar',
        baz: '123',
      });
    });

    it('should handle query string without leading ?', () => {
      expect(parseQuery('foo=bar&baz=123')).toEqual({
        foo: 'bar',
        baz: '123',
      });
    });

    it('should handle empty query string', () => {
      expect(parseQuery('')).toEqual({});
      expect(parseQuery('?')).toEqual({});
    });

    it('should handle multiple values for same key', () => {
      expect(parseQuery('foo=1&foo=2')).toEqual({
        foo: ['1', '2'],
      });
    });

    it('should decode URI components', () => {
      expect(parseQuery('name=%E5%BC%A0%E4%B8%89')).toEqual({
        name: '张三',
      });
    });
  });

  describe('parseURL', () => {
    it('should parse all URL parts', () => {
      const url = 'https://user:pass@example.com:8080/path?foo=bar#hash';
      expect(parseURL(url)).toEqual({
        protocol: 'https:',
        username: 'user',
        password: 'pass',
        hostname: 'example.com',
        port: '8080',
        pathname: '/path',
        search: '?foo=bar',
        hash: '#hash',
      });
    });

    it('should handle URLs without optional parts', () => {
      const url = 'https://example.com/path';
      expect(parseURL(url)).toEqual({
        protocol: 'https:',
        username: '',
        password: '',
        hostname: 'example.com',
        port: '',
        pathname: '/path',
        search: '',
        hash: '',
      });
    });

    it('should throw for invalid URLs', () => {
      expect(() => parseURL('not-a-url')).toThrow();
    });
  });

  describe('getPathname', () => {
    it('should extract pathname from URL', () => {
      expect(getPathname('https://example.com/path/to/resource')).toBe('/path/to/resource');
      expect(getPathname('https://example.com')).toBe('/');
    });
  });

  describe('getQuery', () => {
    it('should extract query string from URL', () => {
      expect(getQuery('https://example.com/path?foo=bar&baz=123')).toBe('?foo=bar&baz=123');
      expect(getQuery('https://example.com/path')).toBe('');
    });
  });

  describe('getHash', () => {
    it('should extract hash from URL', () => {
      expect(getHash('https://example.com/path#section')).toBe('#section');
      expect(getHash('https://example.com/path')).toBe('');
    });
  });
});
