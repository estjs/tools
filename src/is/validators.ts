/**
 * Validates if a string or number is a valid email address.
 * @param {string | number} s - The input to validate.
 * @returns {boolean} - `true` if the input is a valid email, otherwise `false`.
 *
 * @example
 * console.log(isEmail('test@example.com')); // Output: true
 * console.log(isEmail('invalid-email')); // Output: false
 */
export function isEmail(s: string | number): boolean {
  return /^[\w.-]+@[\da-z-]+(\.[\da-z-]+)*\.[\da-z]{2,6}$/i.test(s.toString());
}

/**
 * Validates if a string is a valid ID card number (China specific).
 * @param {string} s - The ID card number to validate.
 * @returns {boolean} - `true` if the input is a valid ID card number, otherwise `false`.
 *
 * @example
 * console.log(isIdCard('11010519491231002X')); // Output: true
 * console.log(isIdCard('123456')); // Output: false
 */
export function isIdCard(s: string): boolean {
  return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0-2]\d)|3[01])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0-2]\d)|3[01])\d{3}(\d|X)$/.test(
    s,
  );
}

/**
 * Validates if a string is a valid mobile number (China specific).
 * @param {string} s - The mobile number to validate.
 * @returns {boolean} - `true` if the input is a valid mobile number, otherwise `false`.
 *
 * @example
 * console.log(isMobile('13800138000')); // Output: true
 * console.log(isMobile('123456')); // Output: false
 */
export function isMobile(s: string): boolean {
  return /^((13\d)|(14[5-9])|(15([0-35-9]))|(16[67])|(17[1-8])|(18\d)|(19[135689|]))\d{8}$/.test(s);
}

/**
 * Validates if a string is a valid URL.
 * @param {string} s - The URL to validate.
 * @returns {boolean} - `true` if the input is a valid URL, otherwise `false`.
 *
 * @example
 * console.log(isUrl('https://www.example.com')); // Output: true
 * console.log(isUrl('invalid-url')); // Output: false
 */
export function isUrl(s: string): boolean {
  return /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/[\w.-]*)*$/.test(s);
}

/**
 * Validates if a string is a valid IPv4 address.
 * @param {string} s - The IPv4 address to validate.
 * @returns {boolean} - `true` if the input is a valid IPv4 address, otherwise `false`.
 *
 * @example
 * console.log(isIPv4('192.168.1.1')); // Output: true
 * console.log(isIPv4('999.999.999.999')); // Output: false
 */
export function isIPv4(s: string): boolean {
  return /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(
    s,
  );
}

/**
 * Validates if a string is a valid hexadecimal color.
 * @param {string} s - The color string to validate.
 * @returns {boolean} - `true` if the input is a valid hex color, otherwise `false`.
 *
 * @example
 * console.log(isHexColor('#FFFFFF')); // Output: true
 * console.log(isHexColor('12345G')); // Output: false
 */
export function isHexColor(s: string): boolean {
  return /^#([\da-f]{3}|[\da-f]{6})$/i.test(s);
}

/**
 * Validates if a string contains only digits.
 * @param {string} s - The string to validate.
 * @returns {boolean} - `true` if the input contains only digits, otherwise `false`.
 *
 * @example
 * console.log(isNumeric('12345')); // Output: true
 * console.log(isNumeric('12345abc')); // Output: false
 */
export function isNumeric(s: string): boolean {
  return /^\d+$/.test(s);
}

export function isCn(s: string): boolean {
  return /[\u4E00-\u9FA5]/.test(s);
}
