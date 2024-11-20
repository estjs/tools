import { filterNotValue } from '../filterNotValue';

describe('filterNotValue', () => {
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
