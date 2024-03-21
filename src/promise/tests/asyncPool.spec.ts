import { asyncPool } from '../..';

describe('test asyncPool', () => {
  it('asyncPool test', async () => {
    function delay(interval: number) {
      return () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (interval > 1000) {
              reject(interval);
            } else {
              resolve(interval);
            }
          }, interval);
        });
    }

    const tasks = [
      delay(1000),
      delay(1000),
      delay(1000),
      delay(1000),
      delay(1000),
      delay(1000),
      delay(1000),
      delay(1000),
    ];
    expect(await asyncPool(4, tasks)).toMatchInlineSnapshot(`
      [
        1000,
        1000,
        1000,
        1000,
        1000,
        1000,
        1000,
        1000,
      ]
    `);
  });
});
