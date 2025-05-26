import { describe, expect, it } from 'vitest';
import { defineConstants } from '../defineConstants';

describe('defineConstants', () => {
  const defs = [
    { key: 'A', value: 1 },
    { key: 'B', value: 2 },
    { key: 'C', value: 3 },
  ];

  it('should generate keys, values, kv, vk, and maps', () => {
    const constants = defineConstants(defs, 'MY');
    expect(constants.MY_KEYS).toEqual(['A', 'B', 'C']);
    expect(constants.MY_VALUES).toEqual([1, 2, 3]);
    expect(constants.MY_KV).toEqual({ A: 1, B: 2, C: 3 });
    expect(constants.MY_VK).toEqual({ 1: 'A', 2: 'B', 3: 'C' });
    expect(constants.MY_MAP_BY_KEY).toEqual({ A: defs[0], B: defs[1], C: defs[2] });
    expect(constants.MY_MAP_BY_VALUE).toEqual({ 1: defs[0], 2: defs[1], 3: defs[2] });
    expect(constants.MY_KEY_MAP).toEqual({ A: defs[0], B: defs[1], C: defs[2] });
    expect(constants.MY_MAP).toEqual({ A: 1, B: 2, C: 3 });
    expect(constants.MY_LIST).toEqual(defs);
  });

  it('should work without namespace', () => {
    const constants = defineConstants(defs);
    expect(constants.KEYS).toEqual(['A', 'B', 'C']);
    expect(constants.VALUES).toEqual([1, 2, 3]);
    expect(constants.KV).toEqual({ A: 1, B: 2, C: 3 });
    expect(constants.VK).toEqual({ 1: 'A', 2: 'B', 3: 'C' });
    expect(constants.MAP_BY_KEY).toEqual({ A: defs[0], B: defs[1], C: defs[2] });
    expect(constants.MAP_BY_VALUE).toEqual({ 1: defs[0], 2: defs[1], 3: defs[2] });
    expect(constants.KEY_MAP).toEqual({ A: defs[0], B: defs[1], C: defs[2] });
    expect(constants.MAP).toEqual({ A: 1, B: 2, C: 3 });
    expect(constants.LIST).toEqual(defs);
  });
});
