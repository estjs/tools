# Object Utilities API

This section introduces all object-related utility functions.

## Import

```ts
import { omit, pick, get, set, deepClone, merge, isEqual, has, unset, keys, values, entries, fromEntries } from 'your-utils-lib/object';
```

---

## omit
Creates an object composed of the own and inherited enumerable property paths of `object` that are not omitted.

- **Parameters**:
  - `obj: object` The source object
  - `props: string[]` The property names to omit
- **Returns**: `object`
- **Example**:
```ts
omit({ a: 1, b: 2, c: 3 }, ['b']); // { a: 1, c: 3 }
```

---

## pick
Creates an object composed of the picked object properties.

- **Parameters**:
  - `obj: object` The source object
  - `props: string[]` The property names to pick
- **Returns**: `object`
- **Example**:
```ts
pick({ a: 1, b: 2, c: 3 }, ['b']); // { b: 2 }
```

---

## get
Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.

- **Parameters**:
  - `obj: object` The object to query
  - `path: string | string[]` The path of the property to get
  - `defaultValue?: any` The value returned if the resolved value is undefined
- **Returns**: `any`
- **Example**:
```ts
get({ a: { b: 2 } }, 'a.b'); // 2
get({ a: { b: 2 } }, 'a.c', 10); // 10
```

---

## set
Sets the value at path of object. If a portion of path doesn't exist, it's created.

- **Parameters**:
  - `obj: object` The object to modify
  - `path: string | string[]` The path of the property to set
  - `value: any` The value to set
- **Returns**: `object`
- **Example**:
```ts
set({ a: { b: 2 } }, 'a.c', 3); // { a: { b: 2, c: 3 } }
```

---

## deepClone
Creates a deep clone of a value.

- **Parameters**: `value: any`
- **Returns**: `any`
- **Example**:
```ts
deepClone({ a: 1, b: { c: 2 } }); // { a: 1, b: { c: 2 } }
```

---

## merge
Deeply merges two or more objects.

- **Parameters**: `...objects: object[]`
- **Returns**: `object`
- **Example**:
```ts
merge({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
```

---

## isEqual
Performs a deep comparison between two values to determine if they are equivalent.

- **Parameters**:
  - `value: any`
  - `other: any`
- **Returns**: `boolean`
- **Example**:
```ts
isEqual({ a: 1 }, { a: 1 }); // true
```

---

## has
Checks if `path` is a direct property of `object`.

- **Parameters**:
  - `obj: object` The object to query
  - `path: string | string[]` The path to check
- **Returns**: `boolean`
- **Example**:
```ts
has({ a: 1 }, 'a'); // true
```

---

## unset
Removes the property at path of object.

- **Parameters**:
  - `obj: object` The object to modify
  - `path: string | string[]` The path of the property to unset
- **Returns**: `boolean`
- **Example**:
```ts
unset({ a: 1, b: 2 }, 'b'); // true
```

---

## keys
Gets the keys of an object.

- **Parameters**: `obj: object`
- **Returns**: `string[]`
- **Example**:
```ts
keys({ a: 1, b: 2 }); // ['a', 'b']
```

---

## values
Gets the values of an object.

- **Parameters**: `obj: object`
- **Returns**: `any[]`
- **Example**:
```ts
values({ a: 1, b: 2 }); // [1, 2]
```

---

## entries
Gets the entries of an object as an array of [key, value] pairs.

- **Parameters**: `obj: object`
- **Returns**: `[string, any][]`
- **Example**:
```ts
entries({ a: 1, b: 2 }); // [['a', 1], ['b', 2]]
```

---

## fromEntries
Creates an object from an array of [key, value] pairs.

- **Parameters**: `entries: [string, any][]`
- **Returns**: `object`
- **Example**:
```ts
fromEntries([['a', 1], ['b', 2]]); // { a: 1, b: 2 }
```
## filterObjectByKeys

Filters an object's properties by removing keys that start with '_' and optionally trims string values.

```ts
function filterObjectByKeys<T extends Record<string, any>>(params: T, trim?: boolean): Partial<T>
```

**Parameters:**
- `params`: The object to filter
- `trim`: Whether to trim string values (default: true)

**Returns:**
- A new object with filtered properties

**Example:**
```ts
const obj = { name: ' Alice ', _private: 123, age: 20 };
filterObjectByKeys(obj);
// { name: 'Alice', age: 20 }
filterObjectByKeys(obj, false);
// { name: ' Alice ', age: 20 }
```
