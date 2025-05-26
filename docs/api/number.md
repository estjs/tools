# Number Utilities API

This section introduces all number-related utility functions.

## Import

```ts
import { thousands, getRandom, getRandomArbitrary, getRandomInt } from 'your-utils-lib/number';
```

---

## thousands
Formats a number or string as a string with thousands separators.

- **Parameters**:
  - `num: number | string` The number or string to format
  - `toFixedCount?: number` Number of decimal places to keep, default is 2
- **Returns**: `string`
- **Example**:
```ts
thousands(1234567.89); // '1,234,567.89'
thousands('1234567.89', 1); // '1,234,567.9'
```

---

## getRandom
Generates a random number between 0 and 1.

- **Returns**: `number`
- **Example**:
```ts
getRandom(); // 0.123...
```

---

## getRandomArbitrary
Generates a random number within a specified range.

- **Parameters**:
  - `min: number` Minimum value
  - `max: number` Maximum value
- **Returns**: `number`
- **Example**:
```ts
getRandomArbitrary(1, 5); // 1.234...
```

---

## getRandomInt
Generates a random integer within a specified range (inclusive).

- **Parameters**:
  - `max?: number` Maximum value, default is 0
  - `min?: number` Minimum value, default is 0
- **Returns**: `number`
- **Example**:
```ts
getRandomInt(10, 1); // 1~10
```
