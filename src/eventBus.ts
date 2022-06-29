class eventBus {
  subs = new Map();
  $on(type, callback) {
    const sub = this.subs.get(type);
    const isEmpty = sub && sub.push(callback);
    if (!isEmpty) {
      this.subs.set(type, [callback]);
    }
  }

  $emit(type, ...payload) {
    (this.subs.get(type) || []).forEach((fn) => {
      fn(...payload);
    });
    (this.subs.get('*') || []).forEach((fn) => {
      fn(...payload);
    });
  }

  $off(type, callback) {
    const sub = this.subs.get(type);
    if (sub) {
      sub.splice(sub.indexOf(callback) >>> 0, 1);
    }
  }
}

export default new eventBus();
