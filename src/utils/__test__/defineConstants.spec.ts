import { defineConstants } from '../defineConstants';

describe('defineConstants function', () => {
  it('should return correct constants without namespace', () => {
    const defs = [
      { key: 'KEY_ONE', value: 'ValueOne' },
      { key: 'KEY_TWO', value: 2 },
    ];
    const constants = defineConstants(defs);

    expect(constants.KEYS).toEqual(['KEY_ONE', 'KEY_TWO']);
    expect(constants.VALUES).toEqual(['ValueOne', 2]);
    expect(constants.KV).toEqual({ KEY_ONE: 'ValueOne', KEY_TWO: 2 });
    expect(constants.VK).toEqual({ ValueOne: 'KEY_ONE', 2: 'KEY_TWO' });
    expect(constants.MAP_BY_KEY).toEqual({
      KEY_ONE: { key: 'KEY_ONE', value: 'ValueOne' },
      KEY_TWO: { key: 'KEY_TWO', value: 2 },
    });
    expect(constants.MAP_BY_VALUE).toEqual({
      ValueOne: { key: 'KEY_ONE', value: 'ValueOne' },
      2: { key: 'KEY_TWO', value: 2 },
    });

    expect(constants.MAP).toEqual({ KEY_ONE: 'ValueOne', KEY_TWO: 2 });
    expect(constants.LIST).toEqual(defs);
  });

  it('should return correct constants with namespace', () => {
    const defs = [
      { key: 'KEY_ONE', value: 'ValueOne' },
      { key: 'KEY_TWO', value: 2 },
    ];
    const namespace = 'NAMESPACE';
    const constants = defineConstants(defs, namespace);

    expect(constants.NAMESPACE_KEYS).toEqual(['KEY_ONE', 'KEY_TWO']);
    expect(constants.NAMESPACE_VALUES).toEqual(['ValueOne', 2]);
    expect(constants.NAMESPACE_KV).toEqual({ KEY_ONE: 'ValueOne', KEY_TWO: 2 });
    expect(constants.NAMESPACE_VK).toEqual({ ValueOne: 'KEY_ONE', 2: 'KEY_TWO' });
    expect(constants.NAMESPACE_MAP_BY_KEY).toEqual({
      KEY_ONE: { key: 'KEY_ONE', value: 'ValueOne' },
      KEY_TWO: { key: 'KEY_TWO', value: 2 },
    });
    expect(constants.NAMESPACE_MAP_BY_VALUE).toEqual({
      ValueOne: { key: 'KEY_ONE', value: 'ValueOne' },
      2: { key: 'KEY_TWO', value: 2 },
    });
    expect(constants.NAMESPACE_KEY_MAP).toEqual({
      KEY_ONE: { key: 'KEY_ONE', value: 'ValueOne' },
      KEY_TWO: { key: 'KEY_TWO', value: 2 },
    });
    expect(constants.NAMESPACE_MAP).toEqual({ KEY_ONE: 'ValueOne', KEY_TWO: 2 });
    expect(constants.NAMESPACE_LIST).toEqual(defs);
  });

  it('should return empty constants when no arguments are passed', () => {
    const constants = defineConstants([]);
    expect(constants).toEqual({
      KEYS: [],
      VALUES: [],
      KV: {},
      VK: {},
      MAP_BY_KEY: {},
      MAP_BY_VALUE: {},
      KEY_MAP: {},
      MAP: {},
      LIST: [],
    });
  });

  it('should handle multiple definitions with the same key', () => {
    const defs = [
      { key: 'KEY_ONE', value: 'ValueOne' },
      { key: 'KEY_ONE', value: 'ValueTwo' },
    ];
    const constants = defineConstants(defs);

    expect(constants.KEYS).toEqual(['KEY_ONE', 'KEY_ONE']);
    expect(constants.VALUES).toEqual(['ValueOne', 'ValueTwo']);
    expect(constants.KV).toEqual({ KEY_ONE: 'ValueTwo' });
    expect(constants.VK).toEqual({ ValueOne: 'KEY_ONE', ValueTwo: 'KEY_ONE' });
    expect(constants.MAP_BY_KEY).toEqual({
      KEY_ONE: { key: 'KEY_ONE', value: 'ValueTwo' },
    });
    expect(constants.MAP_BY_VALUE).toEqual({
      ValueOne: { key: 'KEY_ONE', value: 'ValueOne' },
      ValueTwo: { key: 'KEY_ONE', value: 'ValueTwo' },
    });
    expect(constants.KEY_MAP).toEqual({
      KEY_ONE: { key: 'KEY_ONE', value: 'ValueTwo' },
    });
    expect(constants.MAP).toEqual({ KEY_ONE: 'ValueTwo' });
    expect(constants.LIST).toEqual(defs);
  });

  it('should handle empty namespace correctly', () => {
    const defs = [
      { key: 'KEY_ONE', value: 'ValueOne' },
      { key: 'KEY_TWO', value: 2 },
    ];
    const namespace = '';
    const constants = defineConstants(defs, namespace);

    expect(constants.KEYS).toEqual(['KEY_ONE', 'KEY_TWO']);
    expect(constants.VALUES).toEqual(['ValueOne', 2]);
    expect(constants.KV).toEqual({ KEY_ONE: 'ValueOne', KEY_TWO: 2 });
    expect(constants.VK).toEqual({ ValueOne: 'KEY_ONE', 2: 'KEY_TWO' });
    expect(constants.MAP_BY_KEY).toEqual({
      KEY_ONE: { key: 'KEY_ONE', value: 'ValueOne' },
      KEY_TWO: { key: 'KEY_TWO', value: 2 },
    });
    expect(constants.MAP_BY_VALUE).toEqual({
      ValueOne: { key: 'KEY_ONE', value: 'ValueOne' },
      2: { key: 'KEY_TWO', value: 2 },
    });
    expect(constants.KEY_MAP).toEqual({
      KEY_ONE: { key: 'KEY_ONE', value: 'ValueOne' },
      KEY_TWO: { key: 'KEY_TWO', value: 2 },
    });
    expect(constants.MAP).toEqual({ KEY_ONE: 'ValueOne', KEY_TWO: 2 });
    expect(constants.LIST).toEqual(defs);
  });
});
