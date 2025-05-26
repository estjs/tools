# Color Utilities API

This section introduces all color-related utility functions.

## Import

```ts
import { darken, hexToRgb, isDark, isLight, lighten, mixColor, parseColor, randomColor, rgbToHex } from 'your-utils-lib/color';
```

---

## hexToRgb
Converts a hex color string to an RGB object.

- **Parameters**: `hex: string`
- **Returns**: `{ r: number, g: number, b: number } | null`
- **Example**:
```ts
hexToRgb('#ff0000'); // { r: 255, g: 0, b: 0 }
```

---

## rgbToHex
Converts an RGB color to a hex color string.

- **Parameters**:
  - `r: number` Red value (0-255)
  - `g: number` Green value (0-255)
  - `b: number` Blue value (0-255)
- **Returns**: `string`
- **Example**:
```ts
rgbToHex(255, 0, 0); // '#ff0000'
```

---

## lighten
Lightens a color by a given amount.

- **Parameters**:
  - `color: string` The color to lighten
  - `amount: number` The amount to lighten (0-1)
- **Returns**: `string`
- **Example**:
```ts
lighten('#000000', 0.5); // '#808080'
```

---

## darken
Darkens a color by a given amount.

- **Parameters**:
  - `color: string` The color to darken
  - `amount: number` The amount to darken (0-1)
- **Returns**: `string`
- **Example**:
```ts
darken('#ffffff', 0.5); // '#808080'
```

---

## isDark
Determines if a color is dark.

- **Parameters**: `color: string`
- **Returns**: `boolean`
- **Example**:
```ts
isDark('#000000'); // true
```

---

## isLight
Determines if a color is light.

- **Parameters**: `color: string`
- **Returns**: `boolean`
- **Example**:
```ts
isLight('#ffffff'); // true
```

---

## randomColor
Generates a random color string in hex format.

- **Returns**: `string`
- **Example**:
```ts
randomColor(); // '#a1b2c3'
```
