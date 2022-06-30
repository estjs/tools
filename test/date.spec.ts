import dayjs from 'dayjs';
import { dateFormater } from '../src';
describe('dateFormater', () => {

  it('formater', ()=>{

    const date = 1656510155000;
    expect(dateFormater(date, 'YYYY-MM-DD HH:mm:ss' )).toBe(dayjs(1656510155000).format('YYYY-MM-DD HH:mm:ss'));
    expect(dateFormater(date, 'YYYY/MM/DD HH:mm:ss' )).toBe(dayjs(1656510155000).format('YYYY/MM/DD HH:mm:ss'));
  });

});
