import type { QueryParams, URLParts } from './types';

/**
 * Parses URL query string into an object
 * @param query Query string to parse (with or without leading ?)
 * @returns Object containing query parameters
 * @example
 * ```ts
 * parseQuery('?foo=bar&baz=123')
 * // { foo: 'bar', baz: '123' }
 *
 * parseQuery('items=1&items=2')
 * // { items: ['1', '2'] }
 * ```
 */
export function parseQuery(query: string): QueryParams {
  // Remove leading ? if present
  query = query.replace(/^\?/, '');

  const params: QueryParams = {};

  // Handle empty query string
  if (!query) {
    return params;
  }

  // Split into key-value pairs
  const pairs = query.split('&');

  for (const pair of pairs) {
    const [key, value] = pair.split('=').map(decodeURIComponent);

    if (key in params) {
      // Convert to array if multiple values
      const existing = params[key];
      if (Array.isArray(existing)) {
        existing.push(value);
      } else {
        params[key] = [existing as string, value];
      }
    } else {
      params[key] = value;
    }
  }

  return params;
}

/**
 * Parses a URL string into its constituent parts
 * @param url URL string to parse
 * @returns Object containing URL parts
 * @example
 * ```ts
 * parseURL('https://user:pass@example.com:8080/path?foo=bar#hash')
 * // {
 * //   protocol: 'https:',
 * //   username: 'user',
 * //   password: 'pass',
 * //   hostname: 'example.com',
 * //   port: '8080',
 * //   pathname: '/path',
 * //   search: '?foo=bar',
 * //   hash: '#hash'
 * // }
 * ```
 */
export function parseURL(url: string): URLParts {
  const parsed = new URL(url);

  return {
    protocol: parsed.protocol,
    username: parsed.username,
    password: parsed.password,
    hostname: parsed.hostname,
    port: parsed.port,
    pathname: parsed.pathname,
    search: parsed.search,
    hash: parsed.hash,
  };
}

/**
 * Extracts the pathname from a URL
 * @param url URL string
 * @returns Pathname part of the URL
 * @example
 * ```ts
 * getPathname('https://example.com/path?query')
 * // '/path'
 * ```
 */
export function getPathname(url: string): string {
  return new URL(url).pathname;
}

/**
 * Extracts the query string from a URL
 * @param url URL string
 * @returns Query string (including ?)
 * @example
 * ```ts
 * getQuery('https://example.com/path?foo=bar')
 * // '?foo=bar'
 * ```
 */
export function getQuery(url: string): string {
  return new URL(url).search;
}

/**
 * Extracts the hash from a URL
 * @param url URL string
 * @returns Hash string (including #)
 * @example
 * ```ts
 * getHash('https://example.com/path#section')
 * // '#section'
 * ```
 */
export function getHash(url: string): string {
  return new URL(url).hash;
}
