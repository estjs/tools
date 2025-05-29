import { describe, expect, it, vi } from 'vitest';
import { createEventBus } from '../eventBus';

describe('createEventBus', () => {
  it('should subscribe and emit events', () => {
    const bus = createEventBus();
    const handler = vi.fn();
    bus.on('foo', handler);
    bus.emit('foo', 123);
    expect(handler).toBeCalledWith(123);
  });

  it('should unsubscribe events', () => {
    const bus = createEventBus();
    const handler = vi.fn();
    bus.on('foo', handler);
    bus.off('foo', handler);
    bus.emit('foo', 456);
    expect(handler).not.toBeCalled();
  });

  it('should support multiple handlers for the same event', () => {
    const bus = createEventBus();
    const h1 = vi.fn();
    const h2 = vi.fn();
    bus.on('bar', h1);
    bus.on('bar', h2);
    bus.emit('bar', 'x');
    expect(h1).toBeCalledWith('x');
    expect(h2).toBeCalledWith('x');
  });

  it('should support wildcard * event', () => {
    const bus = createEventBus();
    const handler = vi.fn();
    bus.on('*', handler);
    bus.emit('any', 1, 2);
    expect(handler).toBeCalledWith(1, 2);
  });
});
