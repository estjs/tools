import { getValueByPath, setValueByPath } from '../src/fn/getValueByPath';

describe('getValueByPath', () => {
  it('should return undefined when no object is passed', () => {
    expect(getValueByPath(undefined, 'some.path')).toBeUndefined();
  });

  it('should return undefined when no path is passed', () => {
    expect(getValueByPath({}, undefined)).toBeUndefined();
  });

  it('should return undefined when an empty path is passed', () => {
    expect(getValueByPath({}, '')).toBeUndefined();
  });

  it('should return undefined when a non-existent path is passed', () => {
    expect(getValueByPath({ some: { value: 'hello' } }, 'some.nonExistingValue')).toBeUndefined();
  });

  it('should return the value of a single property', () => {
    expect(getValueByPath({ some: { value: 'hello' } }, 'some.value')).toEqual('hello');
  });

  it('should return the value of a nested property', () => {
    expect(getValueByPath({ some: { nested: { value: 'hello' } } }, 'some.nested.value')).toEqual(
      'hello',
    );
  });

  it('should return undefined when a non-object is encountered in the path', () => {
    expect(getValueByPath({ some: 'value' }, 'some.value')).toBeUndefined();
  });

  it('should return undefined when a non-string key is encountered in the path', () => {
    expect(getValueByPath({ some: { value: 'hello' } }, 'some.123')).toBeUndefined();
  });

  it('should return undefined when an array is encountered in the path', () => {
    expect(getValueByPath({ some: ['value'] }, 'some.value')).toBeUndefined();
  });
});

describe('setValueByPath', () => {
  it('should not modify the object when no object is passed', () => {
    const obj = undefined;
    setValueByPath(obj, 'some.path', 'newValue');
    expect(obj).toBeUndefined();
  });

  it('should not modify the object when no path is passed', () => {
    const obj = {};
    setValueByPath(obj, undefined, 'newValue');
    expect(obj).toEqual({});
  });

  it('should not modify the object when an empty path is passed', () => {
    const obj = {};
    setValueByPath(obj, '', 'newValue');
    expect(obj).toEqual({});
  });

  it('should not modify the object when a non-existent path is passed', () => {
    const obj = { some: { value: 'hello' } };
    setValueByPath(obj, 'some.nonExistingValue', 'newValue');
    expect(obj).toMatchInlineSnapshot(`
      {
        "some": {
          "nonExistingValue": "newValue",
          "value": "hello",
        },
      }
    `);
  });

  it('should modify a single property', () => {
    const obj = { some: { value: 'hello' } };
    setValueByPath(obj, 'some.value', 'newValue');
    expect(obj).toEqual({ some: { value: 'newValue' } });
  });

  it('should modify a nested property', () => {
    const obj = { some: { nested: { value: 'hello' } } };
    setValueByPath(obj, 'some.nested.value', 'newValue');
    expect(obj).toEqual({ some: { nested: { value: 'newValue' } } });
  });

  it('should not modify the object when a non-object is encountered in the path', () => {
    const obj = { some: 'value' };
    setValueByPath(obj, 'some.value', 'newValue');
    expect(obj).toEqual({ some: 'value' });
  });

  it('should not modify the object when a non-string key is encountered in the path', () => {
    const obj = { some: { value: 'hello' } };
    setValueByPath(obj, 'some.123', 'newValue');
    expect(obj).toMatchInlineSnapshot(`
      {
        "some": {
          "123": "newValue",
          "value": "hello",
        },
      }
    `);
  });

  it('should not modify the object when an array is encountered in the path', () => {
    const obj = { some: ['value'] };
    setValueByPath(obj, 'some.value', 'newValue');
    expect(obj).toMatchInlineSnapshot(`
      {
        "some": [
          "value",
        ],
      }
    `);
  });
});
