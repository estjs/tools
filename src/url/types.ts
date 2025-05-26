/**
 * URL query parameter value type
 */
export type QueryValue = string | number | boolean | null | undefined;

/**
 * URL query parameters object type
 */
export type QueryParams = Record<string, QueryValue | QueryValue[]>;

/**
 * URL parts interface
 */
export interface URLParts {
  protocol: string;
  username: string;
  password: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
}

/**
 * Path segment type
 */
export type PathSegment = string;

/**
 * Path options interface
 */
export interface PathOptions {
  /**
   * Whether to trim trailing slashes
   */
  trimTrailingSlash?: boolean;

  /**
   * Whether to ensure leading slash
   */
  ensureLeadingSlash?: boolean;

  /**
   * Whether to normalize consecutive slashes
   */
  normalizeSlashes?: boolean;
}
