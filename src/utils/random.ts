/**
 * Generates a random number between 0 and 1.
 *
 * @return {number} The random number generated.
 */
export function getRandom() {
  return Math.random();
}

/**
 * Generates a random number between a given minimum and maximum value.
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @return {number} The randomly generated number.
 */
export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

/**
 * Generates a random integer between a minimum and maximum value (inclusive).
 *
 * @param {number} max - The maximum value for the random integer. Defaults to 0 if not provided.
 * @param {number} min - The minimum value for the random integer. Defaults to 0 if not provided.
 * @return {number} The randomly generated integer.
 */
export function getRandomInt(max = 0, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Generates a random hexadecimal color code.
 *
 * @return {string} The random color code in hexadecimal format, prefixed with '#'.
 */
export function randomColor() {
  return `#${Number.parseInt(`${Math.random() * 0xffffff}`).toString(16)}`;
}
