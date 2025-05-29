import { describe, expect, it } from 'vitest';
import { curry } from '../curry';

describe('curry', () => {
  it('basic usage', () => {
    const add = (a: number, b: number) => a + b;
    const curriedAdd = curry(add);
    expect(curriedAdd(1)(2)).toBe(3);
    expect(curriedAdd(1, 2)).toBe(3);
  });

  it('multi-argument function', () => {
    const sum = (a: number, b: number, c: number) => a + b + c;
    const curriedSum = curry(sum);
    expect(curriedSum(1)(2)(3)).toBe(6);
    expect(curriedSum(1, 2)(3)).toBe(6);
    expect(curriedSum(1)(2, 3)).toBe(6);
    expect(curriedSum(1, 2, 3)).toBe(6);
  });

  it('partial application', () => {
    const join = (a: string, b: string, c: string) => a + b + c;
    const curriedJoin = curry(join);
    const joinAB = curriedJoin('A', 'B');
    expect(joinAB('C')).toBe('ABC');
  });
});
