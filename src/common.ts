export const _toString = Object.prototype.toString;

/**
 * A no-operation function that does nothing and returns `undefined`.
 * Can be used as a placeholder or default function.
 * @returns {undefined} - Always returns `undefined`.
 *
 * @example
 * const callback = noop; // Assign a default no-op callback
 * callback(); // Does nothing
 */
export const noop: (...args: unknown[]) => unknown = () => {};
