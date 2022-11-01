import {  isReserved, toKebabCase, toPascalCase } from '../src';
describe('name', () => {

  it('capitalize', ()=>{
    expect(toKebabCase('testTestTestTestTestTest')).toMatchInlineSnapshot('"test-test-test-test-test-test"');
    expect(toPascalCase('test.test-test---test')).toMatchInlineSnapshot('"Test.testTest-Test"');
    expect(isReserved('_test')).toMatchInlineSnapshot('true');
    expect(isReserved('test')).toMatchInlineSnapshot('false');
  });
});
