export function isIdCard(s: string): boolean {
  return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0-2|]\d)|3[01])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0-2|]\d)|3[01])\d{3}(\d|X)$/.test(
    s,
  );
}
