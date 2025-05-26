/**
 * Generate a random number between 0 and 1.
 * @returns Random number
 * @example
 *   getRandom(); // 0.123...
 */
export function getRandom(): number {
  return Math.random();
}

/**
 * Generate a random number within a specified range.
 * @param min Minimum value
 * @param max Maximum value
 * @returns Random number
 * @example
 *   getRandomArbitrary(1, 5); // 1.234...
 */
export function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Generate a random integer within a specified range (inclusive).
 * @param max Maximum value, default 0
 * @param min Minimum value, default 0
 * @returns Random integer
 * @example
 *   getRandomInt(10, 1); // 1~10
 */
export function getRandomInt(max = 0, min = 0): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
