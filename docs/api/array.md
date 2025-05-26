# Array Utilities API

This section introduces all array-related utility functions.

## Import

```ts
import { unique, groupBy, chunk, flatten, compact, difference, intersection, union, remove, last, first, sample, shuffle, range } from 'your-utils-lib/array';
```

---

## unique
Removes duplicate values from an array.

- **Parameters**: `arr: any[]`
- **Returns**: `any[]`
- **Example**:
```ts
unique([1, 2, 2, 3]); // [1, 2, 3]
```

---

## groupBy
Groups the elements of an array based on a given function or property.

- **Parameters**:
  - `arr: any[]` The array to group
  - `fn: Function | string` The function or property name to group by
- **Returns**: `Record<string, any[]>`
- **Example**:
```ts
groupBy([{age: 20}, {age: 30}], 'age'); // { '20': [{age: 20}], '30': [{age: 30}] }
```

---

## chunk
Splits an array into chunks of a specified size.

- **Parameters**:
  - `arr: any[]` The array to split
  - `size: number` The size of each chunk
- **Returns**: `any[][]`
- **Example**:
```ts
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```

---

## flatten
Flattens a nested array into a single array.

- **Parameters**: `arr: any[]`
- **Returns**: `any[]`
- **Example**:
```ts
flatten([1, [2, [3, 4]], 5]); // [1,2,3,4,5]
```

---

## compact
Removes falsy values from an array.

- **Parameters**: `arr: any[]`
- **Returns**: `any[]`
- **Example**:
```ts
compact([0, 1, false, 2, '', 3]); // [1,2,3]
```

---

## difference
Returns the values from the first array that are not present in the other arrays.

- **Parameters**:
  - `arr: any[]` The array to inspect
  - `...others: any[][]` The arrays to compare
- **Returns**: `any[]`
- **Example**:
```ts
difference([1,2,3], [2,3,4]); // [1]
```

---

## intersection
Returns the values that are present in all arrays.

- **Parameters**: `...arrays: any[][]`
- **Returns**: `any[]`
- **Example**:
```ts
intersection([1,2,3], [2,3,4]); // [2,3]
```

---

## union
Returns the union of all arrays.

- **Parameters**: `...arrays: any[][]`
- **Returns**: `any[]`
- **Example**:
```ts
union([1,2], [2,3]); // [1,2,3]
```

---

## remove
Removes elements from an array that satisfy a predicate function.

- **Parameters**:
  - `arr: any[]` The array to modify
  - `predicate: Function` The function invoked per iteration
- **Returns**: `any[]` The removed elements
- **Example**:
```ts
remove([1,2,3,4], n => n % 2 === 0); // [2,4]
```

---

## last
Gets the last element of an array.

- **Parameters**: `arr: any[]`
- **Returns**: `any`
- **Example**:
```ts
last([1,2,3]); // 3
```

---

## first
Gets the first element of an array.

- **Parameters**: `arr: any[]`
- **Returns**: `any`
- **Example**:
```ts
first([1,2,3]); // 1
```

---

## sample
Gets a random element from an array.

- **Parameters**: `arr: any[]`
- **Returns**: `any`
- **Example**:
```ts
sample([1,2,3]); // 2
```

---

## shuffle
Randomizes the order of the elements in an array.

- **Parameters**: `arr: any[]`
- **Returns**: `any[]`
- **Example**:
```ts
shuffle([1,2,3]); // [3,1,2]
```

---

## range
Creates an array of numbers progressing from start up to, but not including, end.

- **Parameters**:
  - `start: number` The start of the range
  - `end: number` The end of the range
  - `step?: number` The value to increment or decrement by, default is 1
- **Returns**: `number[]`
- **Example**:
```ts
range(0, 5); // [0,1,2,3,4]
range(0, 20, 5); // [0,5,10,15]
```
