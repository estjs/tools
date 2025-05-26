# String Utilities API

This section introduces all string-related utility functions.

## Import

```ts
import { kebabCase, pascalCase, camelCase, capitalize, decapitalize, escapeHTML, unescapeHTML, stringToHex } from 'your-utils-lib/string';
```

---

## kebabCase
Converts a string to kebab-case.

- **Parameters**: `str: string`
- **Returns**: `string`
- **Example**:
```ts
kebabCase('helloWorld'); // 'hello-world'
kebabCase('MyVariableName'); // 'my-variable-name'
```

---

## pascalCase
Converts a string to PascalCase.

- **Parameters**: `str: string`
- **Returns**: `string`
- **Example**:
```ts
pascalCase('hello world'); // 'HelloWorld'
pascalCase('my_variable_name'); // 'MyVariableName'
```

---

## camelCase
Converts a string to camelCase.

- **Parameters**: `str: string`
- **Returns**: `string`
- **Example**:
```ts
camelCase('hello world'); // 'helloWorld'
camelCase('my_variable_name'); // 'myVariableName'
```

---

## capitalize
Converts the first character of a string to uppercase.

- **Parameters**: `str: string`
- **Returns**: `string`
- **Example**:
```ts
capitalize('hello'); // 'Hello'
```

---

## decapitalize
Converts the first character of a string to lowercase.

- **Parameters**: `str: string`
- **Returns**: `string`
- **Example**:
```ts
decapitalize('Hello'); // 'hello'
```

---

## escapeHTML
Escapes a string to HTML entities.

- **Parameters**: `s: string`
- **Returns**: `string`
- **Example**:
```ts
escapeHTML('<div>"hi"</div>'); // '&lt;div&gt;&quot;hi&quot;&lt;/div&gt;'
```

---

## unescapeHTML
Unescapes HTML entities to a string.

- **Parameters**: `s: string`
- **Returns**: `string`
- **Example**:
```ts
unescapeHTML('&lt;div&gt;hi&lt;/div&gt;'); // '<div>hi</div>'
```

---

## stringToHex
Converts a string to a hexadecimal string.

- **Parameters**: `str: string`
- **Returns**: `string`
- **Example**:
```ts
stringToHex('abc'); // '616263'
```
