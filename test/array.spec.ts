import { ArrRemove, replaceAll, uniqueArray } from '../src';
describe('array', () => {

  it('ArrRemove', ()=>{
    expect(ArrRemove([1, 2, 3], 2)).toStrictEqual([1, 3]);
    expect(ArrRemove([1, 2, 3], 4)).toStrictEqual([1, 2, 3]);
  });
  it('replaceAl', ()=>{
    expect(replaceAll('www.xxx.com', 'w', 'x')).toMatchInlineSnapshot('"xxx.xxx.com"');
    expect(replaceAll('wWw.XxX.com', 'x', 'w')).toMatchInlineSnapshot('"wWw.XwX.com"');
  });
  it('uniqueArray', ()=>{
    expect(uniqueArray([1, 2, 3, 1, 2, 4, 5, 6])).toStrictEqual(
      [
        1,
        2,
        3,
        4,
        5,
        6,
      ]
    );
    expect(uniqueArray([1, 2, 3])).toStrictEqual(
      [
        1,
        2,
        3,
      ]
    );
  });
});
