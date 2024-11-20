import { isEmptyObj } from '../is';
import type { ParsedURL } from '../types';

/**
 * Converts a JSON object into a URL parameter string.
 * @param {Record<string, string>} [json] - The JSON object to convert.
 * @returns {string} - A URL-encoded parameter string.
 *
 * @example
 * const params = { name: 'John Doe', age: '30' };
 * console.log(jsonToUrlParam(params)); // Output: "name=John%20Doe&age=30"
 */
export function jsonToQueryString(json: Record<string, string> = {}): string {
  if (isEmptyObj(json)) {
    return '';
  }
  return Object.entries(json)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

/**
 * Parses a URL query string into a JSON object.
 * @param {string} [urlString] - The query string to parse. Defaults to the current page's URL query string if not provided.
 * @returns {Record<string, string>} - The parsed key-value pairs as a JSON object.
 *
 * @example
 * // URL: https://example.com/?name=John&age=30
 * console.log(getUrlParam()); // Output: { name: "John", age: "30" }
 *
 * const query = "?name=John&age=30";
 * console.log(getUrlParam(query)); // Output: { name: "John", age: "30" }
 */
export function getUrlParam(urlString?: string): Record<string, string> | undefined {
  const queryString = (urlString || window.location.search).split('?')[1];
  if (!queryString) {
    return undefined;
  }
  return queryString.split('&').reduce(
    (result, pair) => {
      const [key, value] = pair.split('=');
      if (key) {
        result[decodeURIComponent(key)] = decodeURIComponent(value || '');
      }
      return result;
    },
    {} as Record<string, string>,
  );
}

/**
 * Converts a URL query string into a JSON object, supporting multiple values for the same key.
 * @param {string} queryString - The URL query string to convert.
 * @returns {Record<string, string | string[]>} - The parsed key-value pairs, with multiple values as arrays.
 *
 * @example
 * const query = "?name=John&hobby=reading&hobby=coding";
 * console.log(queryStringToJson(query));
 * // Output: { name: "John", hobby: ["reading", "coding"] }
 */
export function queryStringToJson(queryString: string): Record<string, string | string[]> {
  const query = queryString.replace(/^\?/, '');
  const params = query.split('&');

  return params.reduce(
    (result, param) => {
      const [key, value] = param.split('=');
      if (key) {
        const decodedKey = decodeURIComponent(key);
        const decodedValue = decodeURIComponent(value || '');
        if (result[decodedKey]) {
          if (Array.isArray(result[decodedKey])) {
            (result[decodedKey] as string[]).push(decodedValue);
          } else {
            result[decodedKey] = [result[decodedKey] as string, decodedValue];
          }
        } else {
          result[decodedKey] = decodedValue;
        }
      }
      return result;
    },
    {} as Record<string, string | string[]>,
  );
}

const PROTOCOL_REGEX = /^\w+:(\/\/)?/;
const PROTOCOL_RELATIVE_REGEX = /^\/\/[^/]+/;

/**
 * Checks if a given string is a valid URL protocol.
 * @param {string} inputStr - The string to check.
 * @param {boolean} [acceptProtocolRelative] - Whether to consider protocol-relative URLs (e.g. //example.com) as valid.
 * @returns {boolean} - True if the string is a valid protocol, false otherwise.
 *
 * @example
 * console.log(hasProtocol('https://example.com')); // Output: true
 * console.log(hasProtocol('example.com')); // Output: false
 */
export function hasProtocol(inputStr: string, acceptProtocolRelative = false): boolean {
  return (
    PROTOCOL_REGEX.test(inputStr) ||
    (acceptProtocolRelative && PROTOCOL_RELATIVE_REGEX.test(inputStr))
  );
}

/**
 * Parses a URL into a JSON object.
 * @param {string} [input] - The URL to parse. Defaults to the current page's URL if not provided.
 * @param {string} [defaultProto] - The default protocol to assume if the input URL does not explicitly specify a protocol.
 * @returns {ParsedURL} - The parsed URL as a JSON object, including protocol, auth (if specified), host, pathname, search, and hash.
 *
 * @example
 * // URL: https://example.com/
 * console.log(parseURL()); // Output: { protocol: "https", host: "example.com", pathname: "/" }
 *
 * const url = "www.example.com";
 * console.log(parseURL(url)); // Output: { protocol: "", host: "www.example.com", pathname: "/" }
 *
 * const url = "foo/bar";
 * console.log(parseURL(url, "https")); // Output: { protocol: "https", host: "", pathname: "/foo/bar" }
 */
export function parseURL(input = '', defaultProto?: string): ParsedURL {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }

  const [protocol = '', auth, hostAndPath = ''] = (
    input.replaceAll('\\', '/').match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []
  ).splice(1);
  const [host = '', path = ''] = (hostAndPath.match(/([^#/?]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);

  return {
    protocol,
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : '',
    host,
    pathname,
    search,
    hash,
  };
}

/**
 * Parses a URL path into a JSON object.
 * @param {string} [input] - The URL path to parse. Defaults to an empty string if not provided.
 * @returns {ParsedURL} - The parsed URL path as a JSON object, including pathname, search, and hash.
 *
 * @example
 * // URL path: /foo/bar
 * console.log(parsePath()); // Output: { pathname: "/", search: "", hash: "" }
 *
 * const path = "/foo/bar?baz=qux#quux";
 * console.log(parsePath(path)); // Output: { pathname: "/foo/bar", search: "?baz=qux", hash: "#quux" }
 */
export function parsePath(input = ''): ParsedURL {
  const [pathname = '', search = '', hash = ''] = (
    input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1);

  return {
    pathname,
    search,
    hash,
  };
}
