export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
export interface Deadline {
  timeRemaining: () => number;
  didTimeout: boolean;
}
declare global {
  interface Window {
    webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    mozRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    msRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    oRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    webkitCancelAnimationFrame: (handle: number) => void;
    mozCancelAnimationFrame: (handle: number) => void;
    oCancelAnimationFrame: (handle: number) => void;
    msCancelAnimationFrame: (handle: number) => void;
  }
}
export type StringNumber = `${number}`;
export interface ParsedURL {
  protocol?: string;
  host?: string;
  auth?: string;
  pathname: string;
  hash: string;
  search: string;
}

export type unionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
