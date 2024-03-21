import { filterParams } from '../..';

describe('is type', () => {
  it('filterParams', () => {
    expect(
      filterParams({
        '__trim__': false,
        '__test': 1,
        '_test': 2,
        '___test': 3,
        'test_': 4,
        'test__': 5,
        ' test ': 6,
        'test1': ' 1 ',
        'test2': ' 2',
        'test3': '3 ',
      }),
    ).toMatchInlineSnapshot(`
      {
        " test ": 6,
        "test1": "1",
        "test2": "2",
        "test3": "3",
        "test_": 4,
        "test__": 5,
      }
    `);
  });
});
