/**
 * Regular expression for converting camelCase to kebab-case
 * @type {RegExp}
 */
const hyphenateRE = /\B([A-Z])/g;

/**
 * Converts a camelCase string to kebab-case
 * Example: myFunction -> my-function
 * @param {string} str - The camelCase string to convert
 * @returns {string} - The kebab-case string
 */
export const kebabCase: (str: string) => string = (str: string) => {
  if (!str) {
    return '';
  }
  return str.replaceAll(hyphenateRE, '-$1').toLowerCase();
};
/**
 * 将字符串转换为 PascalCase。
 * @param str 输入字符串
 * @returns PascalCase 字符串
 * @example
 *   pascalCase('hello world') // 'HelloWorld'
 *   pascalCase('my_variable_name') // 'MyVariableName'
 */
export function pascalCase(str: string): string {
  if (!str) {
    return '';
  }
  return (
    str
      .match(/[a-z]+/gi)
      ?.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('') || ''
  );
}

/**
 * Regular expression for converting kebab-case or snake_case to camelCase
 * @type {RegExp}
 */
const camelizeRE = /[_-\s](\w)/g;

/**
 * Converts a kebab-case or snake_case string to camelCase
 * Example: my-function or my_function -> myFunction
 * @param {string} str - The kebab-case or snake_case string to convert
 * @returns {string} - The camelCase string
 */
export const camelCase: (str: string) => string = (str: string): string => {
  if (!str) {
    return '';
  }
  // Remove leading and trailing hyphens or underscores
  str = str.replaceAll(/^[_-]+|[_-]+$/g, '');
  // Replace consecutive hyphens or underscores with a single hyphen
  str = str.replaceAll(/[_-]+/g, '-');
  // Convert to camelCase
  return str.replaceAll(camelizeRE, (_, c) => c.toUpperCase());
};

/**
 * Capitalizes the first letter of a string
 * Example: hello -> Hello
 * @template T - The input string type
 * @param {T} str - The string to capitalize
 * @returns {Capitalize<T>} - The capitalized string
 */
export const capitalize = (str: string) => {
  if (!str) {
    return '';
  }
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<string>;
};

/**
 * 首字母小写
 * @param str 输入字符串
 * @returns 首字母小写字符串
 * @example
 *   decapitalize('Hello') // 'hello'
 */
export function decapitalize(str: string): string {
  if (!str) {
    return '';
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
}
