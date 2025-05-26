/**
 * RGB color object
 */
export interface RGB {
  r: number;
  g: number;
  b: number;
}

/**
 * RGBA color object with alpha channel
 */
export interface RGBA extends RGB {
  a: number;
}

/**
 * HSL color object
 */
export interface HSL {
  h: number;
  s: number;
  l: number;
}

/**
 * HSLA color object with alpha channel
 */
export interface HSLA extends HSL {
  a: number;
}

/**
 * Supported color string formats
 */
export type ColorFormat = 'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla';
