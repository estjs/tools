
/**
 * Type for a function that takes any arguments and returns any value
 */
export type AnyFunction = (...args: any[]) => any;

/**
 * Type for a function that takes no arguments and returns void
 */
export type Noop = () => void;

/**
 * Type for a value that can be null or undefined
 */
export type Nullable<T> = T | null | undefined;

/**
 * Type for a primitive value
 */
export type Primitive = string | number | boolean | null | undefined;


/**
 * Type for a value that can be a single item or an array of items
 */
export type MaybeArray<T> = T | T[];

/**
 * Type for a value that can be a promise or not
 */
export type MaybePromise<T> = T | Promise<T>;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
export interface Deadline {
  timeRemaining: () => number;
  didTimeout: boolean;
}

export type StringNumber = `${number}`;
export interface ParsedURL {
  protocol?: string;
  host?: string;
  auth?: string;
  pathname: string;
  hash: string;
  search: string;
}

export type unionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
