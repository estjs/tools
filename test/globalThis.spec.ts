import { installGlobal } from '../src';
describe('globalThis', () => {

  it('globalThis', ()=>{
    installGlobal();
    globalThis.$log.log('test');
  });
});
