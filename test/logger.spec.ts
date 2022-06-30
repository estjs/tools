import { Logger } from '../src';

describe('is type', () => {

  it('is Array', ()=>{

    expect(new Logger('estjs').log('test', { 1: 2, 2: 3, 3: 4 })).toBe(true);

  });

});

