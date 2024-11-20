/**
 * Converts a string to kebab-case.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} - The converted kebab-case string.
 *
 * @example
 * kebabCase('helloWorld'); // Output: "hello-world"
 * kebabCase('a_b_c'); // Output: "a-b-c"
 * kebabCase('MyVariableName'); // Output: "my-variable-name"
 */
export function kebabCase(str: string): string {
  return str
    .replaceAll(/[A-Z]+/g, (match, offset) => {
      return `${offset > 0 ? '-' : ''}${match.toLowerCase()}`;
    })
    .replaceAll(/[\s_]+/g, '-');
}

/**
 * Converts a string to PascalCase.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} - The converted PascalCase string.
 *
 * @example
 * pascalCase('hello world'); // Output: "HelloWorld"
 * pascalCase('a-b-c'); // Output: "ABC"
 * pascalCase('my_variable_name'); // Output: "MyVariableName"
 */
export function pascalCase(str: string): string {
  return (
    str
      .match(/[a-z]+/gi)
      ?.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('') || ''
  );
}

/**
 * Converts a string to camelCase.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} - The converted camelCase string.
 *
 * @example
 * camelCase('hello world'); // Output: "helloWorld"
 * camelCase('a-b-c'); // Output: "aBC"
 * camelCase('my_variable_name'); // Output: "myVariableName"
 */
export function camelCase(str: string): string {
  const s = str.replaceAll(/[\s_-]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
  return s.charAt(0).toLowerCase() + s.slice(1);
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str - The input string to capitalize.
 * @returns {string} - The string with the first letter capitalized.
 *
 * @example
 * capitalize('hello'); // Output: "Hello"
 * capitalize('world'); // Output: "World"
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts the first letter of a string to lowercase.
 *
 * @param {string} str - The input string to decapitalize.
 * @returns {string} - The string with the first letter in lowercase.
 *
 * @example
 * decapitalize('Hello'); // Output: "hello"
 * decapitalize('World'); // Output: "world"
 */
export function decapitalize(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
