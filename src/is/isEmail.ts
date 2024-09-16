export function isEmail(s: string | number): boolean {
  return /^[\w.-]+@[\da-z-]+(\.[\da-z-]+)*\.[\da-z]{2,6}$/i.test(s.toString());
}
