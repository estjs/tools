// 定义接口 IBaseDef，表示一个基本定义，包括键和值
export interface IBaseDef {
  key: PropertyKey;
  value: string | number;
}

// 定义一个类型别名 ToPropertyPrefix，用于为属性添加前缀
type ToPropertyPrefix<N extends string = ''> = N extends '' ? '' : `${N}_`;

// 定义一个类型别名 ToProperty，用于组合前缀和属性
type ToProperty<
  Property extends string,
  N extends string = '',
> = `${ToPropertyPrefix<N>}${Property}`;

// 定义一个类型别名 ToKeys，用于提取一个数组中的所有键
type ToKeys<T> = T extends readonly [infer A, ...infer B]
  ? A extends {
      readonly key: infer K;
    }
    ? B['length'] extends 0
      ? [K]
      : [K, ...ToKeys<B>]
    : never
  : [];

// 定义一个类型别名 ToValues，用于提取一个数组中的所有值
type ToValues<T> = T extends readonly [infer A, ...infer B]
  ? A extends {
      readonly value: infer K;
    }
    ? B['length'] extends 0
      ? [K]
      : [K, ...ToValues<B>]
    : never
  : [];

// 定义一个类型别名 ToSingleKeyMap，将一个对象映射到其键
type ToSingleKeyMap<T> = T extends {
  readonly key: infer K;
}
  ? K extends PropertyKey
    ? {
        readonly [Key in K]: T;
      }
    : never
  : never;

// 定义一个类型别名 MergeIntersection，将交集类型合并为单一类型
export type MergeIntersection<A> = A extends infer T ? { [Key in keyof T]: T[Key] } : never;

// 定义一个类型别名 ToKeyMap，将一个数组映射到其键的映射
type ToKeyMap<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
    ? ToSingleKeyMap<A>
    : MergeIntersection<ToSingleKeyMap<A> & ToKeyMap<B>>
  : [];

// 定义一个类型别名 ToSingleValueMap，将一个对象映射到其值
type ToSingleValueMap<T> = T extends {
  readonly value: infer K;
}
  ? K extends PropertyKey
    ? {
        readonly [Key in K]: T;
      }
    : never
  : never;

// 定义一个类型别名 ToValueMap，将一个数组映射到其值的映射
type ToValueMap<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
    ? ToSingleValueMap<A>
    : MergeIntersection<ToSingleValueMap<A> & ToValueMap<B>>
  : [];

// 定义一个类型别名 ToSingleKeyValue，将一个对象映射到其键值对
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

// 定义一个类型别名 ToKeyValue，将一个数组映射到其键值对
type ToKeyValue<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
    ? ToSingleKeyValue<A>
    : MergeIntersection<ToSingleKeyValue<A> & ToKeyValue<B>>
  : [];

// 定义一个类型别名 ToSingleValueKey，将一个对象映射到其值键对
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

// 定义一个类型别名 ToValueKey，将一个数组映射到其值键对
type ToValueKey<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
    ? ToSingleValueKey<A>
    : MergeIntersection<ToSingleValueKey<A> & ToValueKey<B>>
  : [];

/*
  @deprecated 请使用新的方法 `defineConst` 替代。
  @param defs 定义列表
  @param namespace 命名空间
  @returns  返回一个对象，包含以下属性：
              - [`${prefix}KEYS`]: 键的列表
              - [`${prefix}VALUES`]: 值的列表
              - [`${prefix}KV`]: 键值对的映射
              - [`${prefix}VK`]: 值键对的映射
              - [`${prefix}MAP_BY_KEY`]: 按键映射的对象
              - [`${prefix}MAP_BY_VALUE`]: 按值映射的对象
              - [`${prefix}KEY_MAP`]: 键的映射对象
              - [`${prefix}MAP`]: 映射对象
              - [`${prefix}LIST`]: 定义列表

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
  // 定义前缀
  const prefix = namespace ? `${namespace}_` : '';
  return {
    [`${prefix}KEYS`]: defs.map(item => item.key), // 键的列表
    [`${prefix}VALUES`]: defs.map(item => item.value), // 值的列表
    [`${prefix}KV`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.key]: item.value,
      }),
      {},
    ), // 键值对的映射
    [`${prefix}VK`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.value]: item.key,
      }),
      {},
    ), // 值键对的映射
    [`${prefix}MAP_BY_KEY`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.key]: item,
      }),
      {},
    ), // 按键映射的对象
    [`${prefix}MAP_BY_VALUE`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.value]: item,
      }),
      {},
    ), // 按值映射的对象
    [`${prefix}KEY_MAP`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.key]: item,
      }),
      {},
    ), // 键的映射对象
    [`${prefix}MAP`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.key]: item.value,
      }),
      {},
    ), // 映射对象
    [`${prefix}LIST`]: defs, // 定义列表
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
@deprecated 请使用新的方法 `defineConst` 替代。
  @param defs 定义列表
  @param namespace 命名空间
  @returns  返回一个对象，包含以下属性：
              - [`${prefix}KEYS`]: 键的列表
              - [`${prefix}VALUES`]: 值的列表
              - [`${prefix}KV`]: 键值对的映射
              - [`${prefix}VK`]: 值键对的映射
              - [`${prefix}MAP_BY_KEY`]: 按键映射的对象
              - [`${prefix}MAP_BY_VALUE`]: 按值映射的对象
              - [`${prefix}KEY_MAP`]: 键的映射对象
              - [`${prefix}MAP`]: 映射对象
              - [`${prefix}LIST`]: 定义列表

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
