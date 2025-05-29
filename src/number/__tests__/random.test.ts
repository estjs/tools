import { getRandom, getRandomArbitrary, getRandomInt } from '../random';

describe('随机数相关', () => {
  it('getRandom', () => {
    const r = getRandom();
    expect(r).toBeGreaterThanOrEqual(0);
    expect(r).toBeLessThan(1);
  });
  it('getRandomArbitrary', () => {
    const r = getRandomArbitrary(1, 5);
    expect(r).toBeGreaterThanOrEqual(1);
    expect(r).toBeLessThan(5);
  });
  it('getRandomInt', () => {
    const r = getRandomInt(10, 1);
    expect(Number.isInteger(r)).toBe(true);
    expect(r).toBeGreaterThanOrEqual(1);
    expect(r).toBeLessThanOrEqual(10);
  });
});
