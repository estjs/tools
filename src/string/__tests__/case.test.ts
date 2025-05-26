import { camelCase, capitalize, decapitalize, kebabCase, pascalCase } from '../case';

describe('string case conversion', () => {
  it('kebabCase', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
    expect(kebabCase('MyVariableName')).toBe('my-variable-name');
    expect(kebabCase('a_b_c')).toBe('a_b_c');
    expect(kebabCase('')).toBe('');
    expect(kebabCase('Already-Kebab')).toBe('already-kebab');
    expect(kebabCase('with space')).toBe('with space');
    expect(kebabCase(null as any)).toBe('');
    expect(kebabCase(undefined as any)).toBe('');
  });

  it('pascalCase', () => {
    expect(pascalCase('hello world')).toBe('HelloWorld');
    expect(pascalCase('my_variable_name')).toBe('MyVariableName');
    expect(pascalCase('')).toBe('');
    expect(pascalCase('PascalCase')).toBe('Pascalcase');
    expect(pascalCase('with-dash')).toBe('WithDash');
    expect(pascalCase(null as any)).toBe('');
    expect(pascalCase(undefined as any)).toBe('');
  });

  it('camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
    expect(camelCase('my_variable_name')).toBe('myVariableName');
    expect(camelCase('CamelCase')).toBe('CamelCase');
    expect(camelCase('')).toBe('');
    expect(camelCase('with-dash')).toBe('withDash');
    expect(camelCase(null as any)).toBe('');
    expect(camelCase(undefined as any)).toBe('');
  });

  it('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('Hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
    expect(capitalize('a')).toBe('A');
    expect(capitalize(null as any)).toBe('');
    expect(capitalize(undefined as any)).toBe('');
  });

  it('decapitalize', () => {
    expect(decapitalize('Hello')).toBe('hello');
    expect(decapitalize('hello')).toBe('hello');
    expect(decapitalize('')).toBe('');
    expect(decapitalize('A')).toBe('a');
    expect(decapitalize(null as any)).toBe('');
    expect(decapitalize(undefined as any)).toBe('');
  });
});
