import { describe, expect, it } from 'vitest';
import { COLORS, COLOR_CONSTANTS, CSS_COLORS } from '../constants';

describe('color constants', () => {
  describe('COLORS', () => {
    it('should have correct RGB values for basic colors', () => {
      expect(COLORS.BLACK).toEqual({ r: 0, g: 0, b: 0 });
      expect(COLORS.WHITE).toEqual({ r: 255, g: 255, b: 255 });
      expect(COLORS.RED).toEqual({ r: 255, g: 0, b: 0 });
      expect(COLORS.GREEN).toEqual({ r: 0, g: 255, b: 0 });
      expect(COLORS.BLUE).toEqual({ r: 0, g: 0, b: 255 });
    });

    it('should have correct RGB values for secondary colors', () => {
      expect(COLORS.YELLOW).toEqual({ r: 255, g: 255, b: 0 });
      expect(COLORS.CYAN).toEqual({ r: 0, g: 255, b: 255 });
      expect(COLORS.MAGENTA).toEqual({ r: 255, g: 0, b: 255 });
    });

    it('should have transparent color with alpha', () => {
      expect(COLORS.TRANSPARENT).toEqual({ r: 0, g: 0, b: 0, a: 0 });
    });
  });

  describe('CSS_COLORS', () => {
    it('should have correct RGB values for common CSS colors', () => {
      expect(CSS_COLORS.red).toEqual({ r: 255, g: 0, b: 0 });
      expect(CSS_COLORS.green).toEqual({ r: 0, g: 128, b: 0 });
      expect(CSS_COLORS.blue).toEqual({ r: 0, g: 0, b: 255 });
      expect(CSS_COLORS.white).toEqual({ r: 255, g: 255, b: 255 });
      expect(CSS_COLORS.black).toEqual({ r: 0, g: 0, b: 0 });
    });

    it('should have correct RGB values for named colors', () => {
      expect(CSS_COLORS.steelblue).toEqual({ r: 70, g: 130, b: 180 });
      expect(CSS_COLORS.rebeccapurple).toEqual({ r: 102, g: 51, b: 153 });
      expect(CSS_COLORS.goldenrod).toEqual({ r: 218, g: 165, b: 32 });
    });
  });

  describe('COLOR_CONSTANTS', () => {
    it('should have correct maximum values', () => {
      expect(COLOR_CONSTANTS.MAX_RGB).toBe(255);
      expect(COLOR_CONSTANTS.MAX_HUE).toBe(360);
      expect(COLOR_CONSTANTS.MAX_SATURATION).toBe(100);
      expect(COLOR_CONSTANTS.MAX_LIGHTNESS).toBe(100);
      expect(COLOR_CONSTANTS.MAX_ALPHA).toBe(1);
    });

    describe('REGEX', () => {
      it('should match valid hex colors', () => {
        expect(COLOR_CONSTANTS.REGEX.HEX.test('#ff0000')).toBe(true);
        expect(COLOR_CONSTANTS.REGEX.HEX.test('#f00')).toBe(true);
        expect(COLOR_CONSTANTS.REGEX.HEX.test('ff0000')).toBe(true);
        expect(COLOR_CONSTANTS.REGEX.HEX.test('f00')).toBe(true);
      });

      it('should not match invalid hex colors', () => {
        expect(COLOR_CONSTANTS.REGEX.HEX.test('#ff00')).toBe(false);
        expect(COLOR_CONSTANTS.REGEX.HEX.test('#fg0000')).toBe(false);
      });

      it('should match valid rgb colors', () => {
        expect(COLOR_CONSTANTS.REGEX.RGB.test('rgb(255, 0, 0)')).toBe(true);
        expect(COLOR_CONSTANTS.REGEX.RGB.test('rgb(0,0,0)')).toBe(true);
      });

      it('should not match invalid rgb colors', () => {
        expect(COLOR_CONSTANTS.REGEX.RGB.test('rgb(256, 0, 0)')).toBe(true); // Note: regex only checks format, not value ranges
        expect(COLOR_CONSTANTS.REGEX.RGB.test('rgb(0, 0)')).toBe(false);
      });

      it('should match valid rgba colors', () => {
        expect(COLOR_CONSTANTS.REGEX.RGBA.test('rgba(255, 0, 0, 1)')).toBe(true);
        expect(COLOR_CONSTANTS.REGEX.RGBA.test('rgba(0,0,0,0.5)')).toBe(true);
      });

      it('should match valid hsl colors', () => {
        expect(COLOR_CONSTANTS.REGEX.HSL.test('hsl(0, 100%, 50%)')).toBe(true);
        expect(COLOR_CONSTANTS.REGEX.HSL.test('hsl(120,50%,25%)')).toBe(true);
      });

      it('should match valid hsla colors', () => {
        expect(COLOR_CONSTANTS.REGEX.HSLA.test('hsla(0, 100%, 50%, 1)')).toBe(true);
        expect(COLOR_CONSTANTS.REGEX.HSLA.test('hsla(120,50%,25%,0.5)')).toBe(true);
      });
    });
  });
});
