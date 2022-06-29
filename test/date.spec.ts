import { dateFormater } from '../src';
describe('dateFormater', () => {

  it('formater', ()=>{

    const date = 1656510155000;
    expect(dateFormater('YYYY-MM-DD HH:mm:ss', date)).toMatchInlineSnapshot('"2022-06-29 21:42:35"');
    expect(dateFormater('YY/MM/DD HH:mm:ss', date)).toMatchInlineSnapshot('"22/06/29 21:42:35"');
  });

});
