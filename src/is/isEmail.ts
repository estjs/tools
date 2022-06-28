export function isEmail(s: string | number): boolean {
  return /^[\w.-]+@[\dA-Za-z-]+(\.[\dA-Za-z-]+)*\.[\dA-Za-z]{2,6}$/.test(s.toString());
}
