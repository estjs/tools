/**
 * Splits an array into smaller arrays of specified size.
 *
 * @template T Type of array elements
 * @param arr The array to process
 * @param size The length of each chunk
 * @returns An array of chunks
 * @example
 *   chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 *   chunk(['a', 'b', 'c', 'd'], 3) // [['a', 'b', 'c'], ['d']]
 *   chunk([1, 2, 3], 1) // [[1], [2], [3]]
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (size < 1) {
    throw new Error('Chunk size must be greater than 0');
  }

  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
