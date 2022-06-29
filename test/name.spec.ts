import { hyphenate, capitalize, isReserved } from '../src';
describe('name', () => {

  it('capitalize', ()=>{
    expect(hyphenate('testTestTestTestTestTest')).toMatchInlineSnapshot('"test-test-test-test-test-test"');
    expect(capitalize('test')).toMatchInlineSnapshot('"Test"');
    expect(isReserved('_test')).toMatchInlineSnapshot('true');
    expect(isReserved('test')).toMatchInlineSnapshot('false');
  });
});
