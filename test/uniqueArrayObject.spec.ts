import { uniqueArrayObject } from '../src';

describe('uniqueArrayObject', () => {
  it('returns an empty array if the input array is empty', () => {
    expect(uniqueArrayObject([], 'id')).toEqual([]);
  });
  it('returns an array with unique objects based on the specified key', () => {
    const inputArr = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 1, name: 'Jack' },
      { id: 3, name: 'Jim' },
    ];
    const expectedOutput = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Jim' },
    ];
    expect(uniqueArrayObject(inputArr, 'id')).toEqual(expectedOutput);
  });
  it('returns an array with unique objects based on a different key', () => {
    const inputArr = [
      { id: 1, name: 'John' },
      { id: 1, name: 'Jane' },
      { id: 3, email: 'john@gmail.com' },
      { id: 4, email: 'john@gmail.com' },
    ];

    expect(uniqueArrayObject(inputArr, 'id')).toMatchInlineSnapshot(`
      [
        {
          "id": 1,
          "name": "John",
        },
        {
          "email": "john@gmail.com",
          "id": 3,
        },
        {
          "email": "john@gmail.com",
          "id": 4,
        },
      ]
    `);
    expect(uniqueArrayObject(inputArr, 'email')).toMatchInlineSnapshot(`
      [
        {
          "id": 1,
          "name": "John",
        },
        {
          "email": "john@gmail.com",
          "id": 3,
        },
      ]
    `);
  });
});
