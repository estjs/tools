export function humanize(bytes: number) {
  if (bytes === 0) {
    return '0 B';
  }
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const sizeLen = sizes.length;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  const val = bytes / k ** (i > sizeLen - 1 ? sizeLen - 1 : i);
  return val.toPrecision(val >= 1000 ? 4 : 3) + ' ' + (sizes[i] || 'YB');
}
