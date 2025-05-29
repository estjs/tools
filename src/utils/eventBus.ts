/**
 * Creates a simple event bus for subscribing, emitting, and unsubscribing events.
 * @returns An event bus instance with on, emit, and off methods
 * @example
 * ```ts
 * const bus = createEventBus();
 * function handler(data) { console.log(data); }
 * bus.on('test', handler);
 * bus.emit('test', 123); // logs 123
 * bus.off('test', handler);
 * ```
 */
export function createEventBus() {
  const subs = new Map<string, Function[]>();

  return {
    /**
     * Subscribe to an event
     * @param type Event name
     * @param callback Handler function
     */
    on(type: string, callback: Function) {
      const arr = subs.get(type);
      if (arr) {
        arr.push(callback);
      } else {
        subs.set(type, [callback]);
      }
    },
    /**
     * Emit an event
     * @param type Event name
     * @param payload Arguments to pass to handlers
     */
    emit(type: string, ...payload: any[]) {
      (subs.get(type) || []).forEach(fn => fn(...payload));
      (subs.get('*') || []).forEach(fn => fn(...payload));
    },
    /**
     * Unsubscribe from an event
     * @param type Event name
     * @param callback Handler function
     */
    off(type: string, callback: Function) {
      const arr = subs.get(type);
      if (arr) {
        const idx = arr.indexOf(callback);
        if (idx !== -1) arr.splice(idx, 1);
      }
    },
  };
}
