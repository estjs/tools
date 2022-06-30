import { dateFormater } from '../src';
describe('dateFormater', () => {

  it('formater', ()=>{

    const date = 1656510155000;
    expect(dateFormater(date, 'YYYY-MM-DD HH:mm:ss' )).toMatchInlineSnapshot('"2022-06-29 21:42:35"');
    expect(dateFormater(date, 'YYYY/MM/DD HH:mm:ss' )).toMatchInlineSnapshot('"2022/06/29 21:42:35"');
  });

});
