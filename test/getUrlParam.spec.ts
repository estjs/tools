import { getUrlParam } from '../src';

describe('getUrlParam', () => {
  const url = 'www.xxx.com/?a=1&b=2&c=3';
  it('getUrlParam', () => {
    expect(getUrlParam(url)).toMatchInlineSnapshot(`
      {
        "a": "1",
        "b": "2",
        "c": "3",
      }
    `);
  });
});
