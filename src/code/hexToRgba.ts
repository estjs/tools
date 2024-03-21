/**
 * Convert hex color to rgba
 * @param {string} hex
 * @param {number} alpha
 * @returns {string}
 */
export function hexToRGB(hex: string, alpha?: number): string {
  const hexColor = hex.replace(/^#/, '');

  if (/^[\dA-Fa-f]{6}$/.test(hexColor)) {
    const r = Number.parseInt(hexColor.slice(0, 2), 16);
    const g = Number.parseInt(hexColor.slice(2, 4), 16);
    const b = Number.parseInt(hexColor.slice(4, 6), 16);

    if (alpha !== undefined) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
      return `rgb(${r}, ${g}, ${b})`;
    }
  } else {
    throw new Error('Invalid hex color format');
  }
}
