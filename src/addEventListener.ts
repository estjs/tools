import { isString } from './is/isType';
import { animationFrameWrapper } from './animationFrameWrapper';

export function addEventListener(target: Window | Document | Element | string, eventName: string, callback: (e: any) => void, useCapture?: boolean | AddEventListenerOptions, autoRemove?: boolean): (() => void) {
  let isMounted = false;
  let hasMounted = false;
  let stopped = false;
  let stop: () => void;
  let animationStop: (() => void);
  if (eventName === 'DOMContentLoaded') { stopped = true };
  function event(e: Event) {
    try {
      callback?.call?.(e.target, e);
    } catch (error: any) {
      animationStop?.();
      throw new Error(error);
    }
    if (autoRemove) {
      stop();
    }
  }
  update();
  window.addEventListener('DOMContentLoaded', () => {
    update();
    if (stopped) {
      stop?.();
    }
  });

  window.addEventListener('unload', () => stop?.());
  if (eventName === 'DOMContentLoaded') { animationStop = animationFrameWrapper(callback, 0, true) };
  else
  { animationFrameWrapper(update, 0, true) };

  function update() {
    if (hasMounted) {
      return;
    }
    if (isString(target)) {
      target = document.querySelector(target as string) as Element || target;

    }
    if (!isMounted && isString(target)) {
      return isMounted = true;
    } else if (isString(target)) {
      throw new Error(`${target} is not a Element`);
    }
    (target as Element).addEventListener(eventName, event, useCapture);
    stop = () => (target as Element).removeEventListener(eventName, event, useCapture);
    hasMounted = true;
  }
  return () => {
    if (!stop) { return stopped = true };
    setTimeout(stop);
  };
}

