export function randomColor() {
  return '#' + Number.parseInt(Math.random() * 0xffffff + '').toString(16);
}
