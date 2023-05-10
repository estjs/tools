import type { IBaseDef } from '../src/fn/defineConstants';
import { defineConstants } from '../src/fn/defineConstants';
import { filterNotValue } from '../src/fn/filterNotValue';

// 定义一个常量数组
const constantDefs: IBaseDef[] = [
  { key: 'KEY_A', value: 'value_a' },
  { key: 'KEY_B', value: 'value_b' },
  { key: 'KEY_C', value: 42 },
];

const constants = defineConstants(constantDefs);

describe('测试 defineConstants 函数', () => {
  test('测试 KEYS', () => {
    expect(constants.KEYS).toEqual(['KEY_A', 'KEY_B', 'KEY_C']);
  });

  test('测试 VALUES', () => {
    expect(constants.VALUES).toEqual(['value_a', 'value_b', 42]);
  });

  test('测试 KV', () => {
    expect(constants.KV).toEqual({
      KEY_A: 'value_a',
      KEY_B: 'value_b',
      KEY_C: 42,
    });
  });

  test('测试 VK', () => {
    expect(constants.VK).toEqual({
      value_a: 'KEY_A',
      value_b: 'KEY_B',
      42: 'KEY_C',
    });
  });

  test('测试 MAP_BY_KEY', () => {
    expect(constants.MAP_BY_KEY).toEqual({
      KEY_A: { key: 'KEY_A', value: 'value_a' },
      KEY_B: { key: 'KEY_B', value: 'value_b' },
      KEY_C: { key: 'KEY_C', value: 42 },
    });
  });

  test('测试 MAP_BY_VALUE', () => {
    expect(constants.MAP_BY_VALUE).toEqual({
      value_a: { key: 'KEY_A', value: 'value_a' },
      value_b: { key: 'KEY_B', value: 'value_b' },
      42: { key: 'KEY_C', value: 42 },
    });
  });

  test('测试 MAP', () => {
    expect(constants.MAP).toEqual({
      KEY_A: 'value_a',
      KEY_B: 'value_b',
      KEY_C: 42,
    });
  });

  test('测试 LIST', () => {
    expect(constants.LIST).toEqual(constantDefs);
  });
});

describe('filterNotValue', () => {
  it('returns the same value if it is not an object', () => {
    expect(filterNotValue(null)).toBe(null);
    expect(filterNotValue(123)).toBe(123);
    expect(filterNotValue('abc')).toBe('abc');
  });

  it('removes all undefined or null values from the object', () => {
    const input = {
      a: 123,
      b: null,
      c: undefined,
      d: {
        e: 'test',
        f: null,
        g: {
          h: undefined,
        },
      },
    };

    expect(filterNotValue(input)).toMatchInlineSnapshot(`
      {
        "a": 123,
        "d": {
          "e": "test",
          "f": null,
          "g": {
            "h": undefined,
          },
        },
      }
    `);
  });

  it('keeps all values when deep is true', () => {
    const input = {
      a: 123,
      b: null,
      c: undefined,
      d: {
        e: 'test',
        f: null,
        g: {
          h: undefined,
        },
      },
    };

    expect(filterNotValue(input, true)).toMatchInlineSnapshot(`
      {
        "a": 123,
        "d": {
          "e": "test",
        },
      }
    `);
  });
});
