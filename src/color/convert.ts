import { isString } from '../utils';
import type { HSL, RGB, RGBA } from './types';

/**
 * Converts a hex color string to RGB object
 * @param hex The hex color string (3 or 6 digits, with or without #)
 * @returns RGB object
 * @example
 *   hexToRgb('#ff0000') // { r: 255, g: 0, b: 0 }
 *   hexToRgb('f00') // { r: 255, g: 0, b: 0 }
 */
export function hexToRgb(hex: string): RGB {
  // Remove # if present
  hex = hex.replace(/^#/, '');

  // Convert 3-digit hex to 6-digit
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(char => char + char)
      .join('');
  }

  const num = Number.parseInt(hex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

/**
 * Converts RGB values to hex string
 * @param r Red component (0-255)
 * @param g Green component (0-255)
 * @param b Blue component (0-255)
 * @returns Hex color string with #
 * @example
 *   rgbToHex(255, 0, 0) // '#ff0000'
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b]
    .map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    })
    .join('')}`;
}

/**
 * Converts RGB values to HSL object
 * @param r Red component (0-255)
 * @param g Green component (0-255)
 * @param b Blue component (0-255)
 * @returns HSL object
 * @example
 *   rgbToHsl(255, 0, 0) // { h: 0, s: 100, l: 50 }
 */
export function rgbToHsl(r: number, g: number, b: number): HSL {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Converts HSL values to RGB object
 * @param h Hue (0-360)
 * @param s Saturation (0-100)
 * @param l Lightness (0-100)
 * @returns RGB object
 * @example
 *   hslToRgb(0, 100, 50) // { r: 255, g: 0, b: 0 }
 */
export function hslToRgb(h: number, s: number, l: number): RGB {
  s /= 100;
  l /= 100;
  h /= 360;

  let r: number;
  let g: number;
  let b: number;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

/**
 * Parses a color string into RGB/RGBA object
 * @param color Color string in hex, rgb, rgba, hsl, or hsla format
 * @returns RGB or RGBA object
 * @example
 *   parseColor('#ff0000') // { r: 255, g: 0, b: 0 }
 *   parseColor('rgb(255, 0, 0)') // { r: 255, g: 0, b: 0 }
 *   parseColor('rgba(255, 0, 0, 0.5)') // { r: 255, g: 0, b: 0, a: 0.5 }
 */
export function parseColor(color: string): RGB | RGBA {
  if (!color || !isString(color)) {
    return color as any;
  }
  color = color.toLowerCase().trim();

  // Handle hex
  if (color.startsWith('#')) {
    return hexToRgb(color);
  }

  // Handle rgb/rgba
  if (color.startsWith('rgb')) {
    const values = color.match(/\d+(\.\d+)?/g)?.map(Number) || [];
    if (values.length === 3) {
      return { r: values[0], g: values[1], b: values[2] };
    }
    if (values.length === 4) {
      return { r: values[0], g: values[1], b: values[2], a: values[3] };
    }
  }

  // Handle hsl/hsla
  if (color.startsWith('hsl')) {
    const values = color.match(/\d+(\.\d+)?/g)?.map(Number) || [];
    if (values.length >= 3) {
      const rgb = hslToRgb(values[0], values[1], values[2]);
      if (values.length === 4) {
        return { ...rgb, a: values[3] };
      }
      return rgb;
    }
  }

  throw new Error(`Invalid color format: ${color}`);
}
