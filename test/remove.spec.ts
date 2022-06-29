import { ArrRemove } from '../src';
describe('replace', () => {

  it('replaceAll api', ()=>{
    expect(ArrRemove([1, 2, 3], 2)).toStrictEqual([1, 3]);
  });
});
