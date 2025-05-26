// Interface for a basic definition, including key and value
export interface IBaseDef {
  key: PropertyKey;
  value: string | number;
}

// Type alias for adding a prefix to a property
type ToPropertyPrefix<N extends string = ''> = N extends '' ? '' : `${N}_`;

// Type alias for combining prefix and property
type ToProperty<
  Property extends string,
  N extends string = '',
> = `${ToPropertyPrefix<N>}${Property}`;

// Type alias for extracting all keys from an array
type ToKeys<T> = T extends readonly [infer A, ...infer B]
  ? A extends {
      readonly key: infer K;
    }
    ? B['length'] extends 0
      ? [K]
      : [K, ...ToKeys<B>]
    : never
  : [];

// Type alias for extracting all values from an array
type ToValues<T> = T extends readonly [infer A, ...infer B]
  ? A extends {
      readonly value: infer K;
    }
    ? B['length'] extends 0
      ? [K]
      : [K, ...ToValues<B>]
    : never
  : [];

// Type alias for mapping an object to its keys
type ToSingleKeyMap<T> = T extends {
  readonly key: infer K;
}
  ? K extends PropertyKey
    ? {
        readonly [Key in K]: T;
      }
    : never
  : never;

// Type alias for merging intersection types into a single type
export type MergeIntersection<A> = A extends infer T ? { [Key in keyof T]: T[Key] } : never;

// Type alias for mapping an array to its key map
type ToKeyMap<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
    ? ToSingleKeyMap<A>
    : MergeIntersection<ToSingleKeyMap<A> & ToKeyMap<B>>
  : [];

// Type alias for mapping an object to its values
type ToSingleValueMap<T> = T extends {
  readonly value: infer K;
}
  ? K extends PropertyKey
    ? {
        readonly [Key in K]: T;
      }
    : never
  : never;

// Type alias for mapping an array to its value map
type ToValueMap<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
    ? ToSingleValueMap<A>
    : MergeIntersection<ToSingleValueMap<A> & ToValueMap<B>>
  : [];

// Type alias for mapping an object to its key-value pairs
type ToSingleKeyValue<T> = T extends {
  readonly key: infer K;
  readonly value: infer V;
}
  ? K extends PropertyKey
    ? {
        readonly [Key in K]: V;
      }
    : never
  : never;

// Type alias for mapping an array to its key-value pairs
type ToKeyValue<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
    ? ToSingleKeyValue<A>
    : MergeIntersection<ToSingleKeyValue<A> & ToKeyValue<B>>
  : [];

// Type alias for mapping an object to its value key pairs
type ToSingleValueKey<T> = T extends {
  readonly key: infer K;
  readonly value: infer V;
}
  ? V extends PropertyKey
    ? {
        readonly [Key in V]: K;
      }
    : never
  : never;

// Type alias for mapping an array to its value key pairs
type ToValueKey<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
    ? ToSingleValueKey<A>
    : MergeIntersection<ToSingleValueKey<A> & ToValueKey<B>>
  : [];

/*
  @deprecated Please use the new method `defineConst` instead.
  @param defs Definition list
  @param namespace Namespace
  @returns Returns an object containing the following properties:
              - [`${prefix}KEYS`]: Key list
              - [`${prefix}VALUES`]: Value list
              - [`${prefix}KV`]: Key-value mapping
              - [`${prefix}VK`]: Value-key mapping
              - [`${prefix}MAP_BY_KEY`]: Key mapping object
              - [`${prefix}MAP_BY_VALUE`]: Value mapping object
              - [`${prefix}KEY_MAP`]: Key mapping object
              - [`${prefix}MAP`]: Mapping object
              - [`${prefix}LIST`]: Definition list

  @example
          const defs = [
              { key: 'A', value: 1 },
              { key: 'B', value: 2 },
              { key: 'C', value: 3 },
                ]
          defineConstants(defs, 'MY_NAMESPACE')
                // {
                //   MY_NAMESPACE_KEYS: ['A', 'B', 'C'],
                //   MY_NAMESPACE_VALUES: [1, 2, 3],
                //   MY_NAMESPACE_KV: { A: 1, B: 2, C: 3 },
                //   MY_NAMESPACE_VK: { 1: 'A', 2: 'B', 3: 'C' },
                }
*/
export function defineConstants<T extends readonly IBaseDef[], N extends string = ''>(
  defs: T,
  namespace?: N,
) {
  // Define prefix
  const prefix = namespace ? `${namespace}_` : '';
  return {
    [`${prefix}KEYS`]: defs.map(item => item.key), // Key list
    [`${prefix}VALUES`]: defs.map(item => item.value), // Value list
    [`${prefix}KV`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.key]: item.value,
      }),
      {},
    ), // Key-value mapping
    [`${prefix}VK`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.value]: item.key,
      }),
      {},
    ), // Value-key mapping
    [`${prefix}MAP_BY_KEY`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.key]: item,
      }),
      {},
    ), // Key mapping object
    [`${prefix}MAP_BY_VALUE`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.value]: item,
      }),
      {},
    ), // Value mapping object
    [`${prefix}KEY_MAP`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.key]: item,
      }),
      {},
    ), // Key mapping object
    [`${prefix}MAP`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.key]: item.value,
      }),
      {},
    ), // Mapping object
    [`${prefix}LIST`]: defs, // Definition list
  } as MergeIntersection<
    {
      [Key in ToProperty<'KV', N>]: ToKeyValue<T>;
    } & {
      [Key in ToProperty<'VK', N>]: ToValueKey<T>;
    } & {
      [Key in ToProperty<'KEYS', N>]: ToKeys<T>;
    } & {
      [Key in ToProperty<'VALUES', N>]: ToValues<T>;
    } & {
      [Key in ToProperty<'MAP_BY_KEY', N>]: ToKeyMap<T>;
    } & {
      [Key in ToProperty<'MAP_BY_VALUE', N>]: ToValueMap<T>;
    } & {
      [Key in ToProperty<'KEY_MAP', N>]: ToKeyMap<T>;
    } & {
      [Key in ToProperty<'MAP', N>]: ToKeyValue<T>;
    } & {
      [Key in ToProperty<'LIST', N>]: T;
    }
  >;
}
/*
  @param defs Definition list
  @param namespace Namespace
  @returns Returns an object containing the following properties:
              - [`${prefix}KEYS`]: Key list
              - [`${prefix}VALUES`]: Value list
              - [`${prefix}KV`]: Key-value mapping
              - [`${prefix}VK`]: Value-key mapping
              - [`${prefix}MAP_BY_KEY`]: Key mapping object
              - [`${prefix}MAP_BY_VALUE`]: Value mapping object
              - [`${prefix}KEY_MAP`]: Key mapping object
              - [`${prefix}MAP`]: Mapping object
              - [`${prefix}LIST`]: Definition list

  @example
          const defs = [
              { key: 'A', value: 1 },
              { key: 'B', value: 2 },
              { key: 'C', value: 3 },
                ]
          defineConstants(defs, 'MY_NAMESPACE')
                // {
                //   MY_NAMESPACE_KEYS: ['A', 'B', 'C'],
                //   MY_NAMESPACE_VALUES: [1, 2, 3],
                //   MY_NAMESPACE_KV: { A: 1, B: 2, C: 3 },
                //   MY_NAMESPACE_VK: { 1: 'A', 2: 'B', 3: 'C' },
                }
*/
export const defineConst = defineConstants;
