import { describe, expect, it } from 'vitest';
import { addQueryParams, buildQuery, joinURL, setHash } from '../build';

describe('uRL building', () => {
  describe('buildQuery', () => {
    it('should build query string from object', () => {
      expect(buildQuery({ foo: 'bar', baz: 123 })).toBe('?foo=bar&baz=123');
    });

    it('should handle array values', () => {
      expect(buildQuery({ items: ['1', '2'] })).toBe('?items=1&items=2');
    });

    it('should handle empty object', () => {
      expect(buildQuery({})).toBe('');
    });

    it('should skip null and undefined values', () => {
      expect(buildQuery({ foo: 'bar', skip: null, empty: undefined })).toBe('?foo=bar');
    });

    it('should encode URI components', () => {
      expect(buildQuery({ name: '张三' })).toBe('?name=%E5%BC%A0%E4%B8%89');
    });
  });

  describe('joinURL', () => {
    it('should join URL segments', () => {
      expect(joinURL('https://example.com', 'path', 'to', 'resource')).toBe(
        'https://example.com/path/to/resource',
      );
    });

    it('should handle segments with slashes', () => {
      expect(joinURL('api/', '/users/', '/123/')).toBe('api/users/123/');
    });

    it('should handle empty segments', () => {
      expect(joinURL('https://example.com', '', 'path')).toBe('https://example.com/path');
    });
  });

  describe('addQueryParams', () => {
    it('should add query parameters to URL', () => {
      expect(addQueryParams('https://example.com', { page: 1, sort: 'desc' })).toBe(
        'https://example.com/?page=1&sort=desc',
      );
    });

    it('should merge with existing query parameters', () => {
      expect(addQueryParams('https://example.com?foo=bar', { baz: 'qux' })).toBe(
        'https://example.com/?foo=bar&baz=qux',
      );
    });

    it('should handle array values', () => {
      expect(addQueryParams('https://example.com', { items: ['1', '2'] })).toBe(
        'https://example.com/?items=1&items=2',
      );
    });

    it('should override existing values', () => {
      expect(addQueryParams('https://example.com?page=1', { page: 2 })).toBe(
        'https://example.com/?page=2',
      );
    });

    it('should skip null and undefined values', () => {
      expect(addQueryParams('https://example.com', { foo: 'bar', skip: null })).toBe(
        'https://example.com/?foo=bar',
      );
    });
  });

  describe('setHash', () => {
    it('should set hash on URL', () => {
      expect(setHash('https://example.com', 'section1')).toBe('https://example.com/#section1');
    });

    it('should handle hash with #', () => {
      expect(setHash('https://example.com', '#section1')).toBe('https://example.com/#section1');
    });

    it('should replace existing hash', () => {
      expect(setHash('https://example.com#old', 'new')).toBe('https://example.com/#new');
    });

    it('should handle empty hash', () => {
      expect(setHash('https://example.com#section', '')).toBe('https://example.com/#');
    });
  });
});
