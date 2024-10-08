export function isEmptyObj(value: object): boolean {
  return Object.getOwnPropertyNames(value).length === 0;
}

export function isEmptyArr(value: Array<unknown>): boolean {
  return value.length === 0;
}

export function isEmptyStr(value: string): boolean {
  return value.length === 0;
}
export function isEmptySet(value: Set<unknown>): boolean {
  return value.size === 0;
}
export function isEmptyMap(value: Map<object, unknown>): boolean {
  return value.size === 0;
}
