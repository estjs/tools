/**
 * Converts a byte size into a human-readable format.
 * @param {number} bytes - The size in bytes.
 * @returns {string} - The human-readable size string.
 */
export function humanize(bytes: number): string {
  if (bytes === 0) {
    return '0 B';
  }
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  const val = bytes / k ** (i > sizes.length - 1 ? sizes.length - 1 : i);
  return `${val.toPrecision(val >= 1000 ? 4 : 3)} ${sizes[i] || 'YB'}`;
}
