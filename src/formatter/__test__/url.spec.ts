import {
  getUrlParam,
  hasProtocol,
  jsonToQueryString,
  parsePath,
  parseURL,
  queryStringToJson,
} from '../url';

describe('url', () => {
  describe('jsonToQueryString', () => {
    it('should return an empty string for empty object', () => {
      expect(jsonToQueryString({})).toBe('');
    });

    it('should convert JSON to query string', () => {
      const input = { name: 'John Doe', age: '30' };
      expect(jsonToQueryString(input)).toBe('name=John%20Doe&age=30');
    });

    it('should handle special characters in keys and values', () => {
      const input = { 'na&me': 'Jo=hn', 'a+ge': '30' };
      expect(jsonToQueryString(input)).toBe('na%26me=Jo%3Dhn&a%2Bge=30');
    });
  });

  describe('getUrlParam', () => {
    it('should return undefined for empty or missing query string', () => {
      expect(getUrlParam('')).toBeUndefined();
      expect(getUrlParam('?')).toBeUndefined();
    });

    it('should parse query string to JSON object', () => {
      const input = '?name=John&age=30';
      const expected = { name: 'John', age: '30' };
      expect(getUrlParam(input)).toEqual(expected);
    });

    it('should handle missing values in query string', () => {
      const input = '?name=John&age';
      const expected = { name: 'John', age: '' };
      expect(getUrlParam(input)).toEqual(expected);
    });

    it('should handle decoding of special characters', () => {
      const input = '?na%26me=Jo%3Dhn&a%2Bge=30';
      const expected = { 'na&me': 'Jo=hn', 'a+ge': '30' };
      expect(getUrlParam(input)).toEqual(expected);
    });
  });

  describe('queryStringToJson', () => {
    it('should return an empty object for an empty query string', () => {
      expect(queryStringToJson('')).toEqual({});
    });

    it('should parse query string into a JSON object', () => {
      const input = '?name=John&hobby=reading&hobby=coding';
      const expected = { name: 'John', hobby: ['reading', 'coding'] };
      expect(queryStringToJson(input)).toEqual(expected);
    });

    it('should handle single values and arrays correctly', () => {
      const input = '?key=value&key=value2';
      const expected = { key: ['value', 'value2'] };
      expect(queryStringToJson(input)).toEqual(expected);
    });
  });

  describe('hasProtocol', () => {
    it('should return true for valid protocols', () => {
      expect(hasProtocol('https://example.com')).toBe(true);
      expect(hasProtocol('ftp://example.com')).toBe(true);
    });

    it('should return false for invalid or missing protocols', () => {
      expect(hasProtocol('example.com')).toBe(false);
      expect(hasProtocol('/path')).toBe(false);
    });

    it('should validate protocol-relative URLs if allowed', () => {
      expect(hasProtocol('//example.com', true)).toBe(true);
    });
  });

  describe('parseURL', () => {
    it('should parse a full URL into components', () => {
      const input = 'https://user:pass@example.com:8080/path?query#hash';
      const expected = {
        protocol: 'https:',
        auth: 'user:pass',
        host: 'example.com:8080',
        pathname: '/path',
        search: '?query',
        hash: '#hash',
      };
      expect(parseURL(input)).toEqual(expected);
    });

    it('should handle missing protocol and apply default protocol', () => {
      const input = 'example.com';
      expect(parseURL(input, 'https://')).toEqual({
        protocol: 'https:',
        auth: '',
        host: 'example.com',
        pathname: '',
        search: '',
        hash: '',
      });
    });
  });

  describe('parsePath', () => {
    it('should parse path, search, and hash', () => {
      const input = '/path?query=value#hash';
      const expected = {
        pathname: '/path',
        search: '?query=value',
        hash: '#hash',
      };
      expect(parsePath(input)).toEqual(expected);
    });

    it('should handle missing search and hash', () => {
      const input = '/path';
      const expected = {
        pathname: '/path',
        search: '',
        hash: '',
      };
      expect(parsePath(input)).toEqual(expected);
    });
  });
});
