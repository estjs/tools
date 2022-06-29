import { hyphenate, capitalize, isReserved } from '../src';
describe('name', () => {

  it('camelize', ()=>{
    expect(hyphenate('testTest')).toMatchInlineSnapshot('"test-test"');
    expect(capitalize('test')).toMatchInlineSnapshot('"Test"');
    expect(isReserved('_test')).toMatchInlineSnapshot('true');
    expect(isReserved('test')).toMatchInlineSnapshot('false');
  });
});
