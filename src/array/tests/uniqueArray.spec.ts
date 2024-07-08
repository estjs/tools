import { mergeArraysByUniqueKey } from '../uniqueArray';

interface Person {
  id: number;
  name: string;
}

describe('mergeArraysByUniqueKey', () => {
  it('should merge arrays by unique key', () => {
    const array1: Person[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Doe' },
    ];

    const array2: Person[] = [
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Doe' },
      { id: 4, name: 'Alice' },
    ];

    const mergedArray = mergeArraysByUniqueKey(array1, array2, 'id');

    // 验证合并后数组的长度是否正确
    expect(mergedArray).toHaveLength(array1.length + array2.length - 2);

    // 验证合并后数组中的元素是否包含预期的内容
    expect(mergedArray).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Doe' },
      { id: 4, name: 'Alice' },
    ]);
  });
});
