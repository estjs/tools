export class EventBus {
  subs = new Map();
  instance: EventBus | null = null;
  constructor() {
    if (!this.instance) {
      this.instance = this;
    }
    return this.instance;
  }

  $on(type: string, callback: Function) {
    const sub = this.subs.get(type);
    const isEmpty = sub && sub.push(callback);
    if (!isEmpty) {
      this.subs.set(type, [callback]);
    }
  }

  $emit(type: string, ...payload: any[]) {
    (this.subs.get(type) || []).forEach((fn: Function) => {
      fn(...payload);
    });
    (this.subs.get('*') || []).forEach((fn: Function) => {
      fn(...payload);
    });
  }

  $off(type: string, callback: Function) {
    const sub = this.subs.get(type);
    if (sub) {
      sub.splice(sub.indexOf(callback) >>> 0, 1);
    }
  }
}
