// @see https://mathiasbynens.be/notes/globalthis#naive-polyfill

(function (Object) {
  typeof globalThis !== 'object' && (
  // @ts-expect-error
    this
      ? get()
      : (Object.defineProperty(Object.prototype, '_T_', {
          configurable: true,
          get
          // @ts-expect-error
        }), _T_)
  );
  function get() {
    // eslint-disable-next-line no-var
    // @ts-expect-error
    const global = this || self;
    global.globalThis = global;
    // @ts-expect-error
    delete Object.prototype._T_;
  }
}(Object));
