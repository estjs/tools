/**
 * humanize
 * @param bytes
 * @returns
 */
export function humanize(bytes) {
  if (bytes === 0) {
    return '0 B';
  }
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const val = bytes / k ** i;
  return val.toPrecision(val >= 1000 ? 4 : 3) + ' ' + sizes[i];
}
