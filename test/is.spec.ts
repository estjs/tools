import { isArray } from '../src';
describe('is type', () => {

  it('is Array', ()=>{

    const arr: any[] = [];

    expect(isArray(arr)).toBe(true);

  });

});
