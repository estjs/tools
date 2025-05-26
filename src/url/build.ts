import type { QueryParams } from './types';

/**
 * Builds a query string from an object of parameters
 * @param params Object containing query parameters
 * @returns Query string (including ?)
 * @example
 * ```ts
 * buildQuery({ foo: 'bar', baz: 123 })
 * // '?foo=bar&baz=123'
 *
 * buildQuery({ items: ['1', '2'] })
 * // '?items=1&items=2'
 * ```
 */
export function buildQuery(params: QueryParams): string {
  const pairs: string[] = [];

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) {
      continue;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null) {
          pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`);
        }
      }
    } else {
      pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    }
  }

  return pairs.length ? `?${pairs.join('&')}` : '';
}

/**
 * Joins URL segments together, handling slashes correctly
 * @param segments URL segments to join
 * @returns Joined URL
 * @example
 * ```ts
 * joinURL('https://example.com', 'path', 'to', 'resource')
 * // 'https://example.com/path/to/resource'
 *
 * joinURL('api/', '/users/', '/123/')
 * // 'api/users/123'
 * ```
 */
export function joinURL(...segments: string[]): string {
  return segments
    .filter(Boolean)
    .map((segment, index) => {
      // Remove leading slash except for first segment
      if (index > 0) {
        segment = segment.replace(/^\/+/, '');
      }
      // Remove trailing slash except for last segment
      if (index < segments.length - 1) {
        segment = segment.replace(/\/+$/, '');
      }
      return segment;
    })
    .join('/');
}

/**
 * Adds query parameters to a URL
 * @param url Base URL
 * @param params Query parameters to add
 * @returns URL with added query parameters
 * @example
 * ```ts
 * addQueryParams('https://example.com', { page: 1, sort: 'desc' })
 * // 'https://example.com?page=1&sort=desc'
 *
 * addQueryParams('https://example.com?foo=bar', { baz: 'qux' })
 * // 'https://example.com?foo=bar&baz=qux'
 * ```
 */
export function addQueryParams(url: string, params: QueryParams): string {
  const urlObj = new URL(url);
  const searchParams = new URLSearchParams(urlObj.search);

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) {
      continue;
    }

    if (Array.isArray(value)) {
      // Remove existing values for this key
      searchParams.delete(key);
      for (const item of value) {
        if (item !== undefined && item !== null) {
          searchParams.append(key, String(item));
        }
      }
    } else {
      searchParams.set(key, String(value));
    }
  }

  urlObj.search = searchParams.toString();
  return urlObj.toString();
}

/**
 * Updates the hash fragment of a URL
 * @param url URL to update
 * @param hash New hash value (with or without #)
 * @returns URL with updated hash
 * @example
 * ```ts
 * setHash('https://example.com', 'section1')
 * // 'https://example.com#section1'
 *
 * setHash('https://example.com#old', '#new')
 * // 'https://example.com#new'
 * ```
 */
export function setHash(url: string, hash: string): string {
  const urlObj = new URL(url);
  urlObj.hash = hash.startsWith('#') ? hash : `#${hash}`;
  return urlObj.toString();
}
