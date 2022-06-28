export function throttle(fn: Function, stop: number) {
  let start = 0
  return function (this: any, e?: any) {
    const end = Date.now()
    if (end - start >= stop) {
      const result = fn.call(this, e)
      start = end
      return result
    }
  }
}
