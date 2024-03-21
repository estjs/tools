import { isBower } from '../is/isType';

/**
 * Generates a UUID (Universally Unique Identifier) using the bower algorithm.
 *
 * @see https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
 * @bench https://jsbench.github.io/#80610cde9bc93d0f3068e5793e60ff11
 *
 * @return {string} The generated UUID.
 */
export function uuid() {
  if (!isBower()) {
    console.error('just support bower');
    return;
  }
  // @ts-expect-error
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replaceAll(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
  );
}
