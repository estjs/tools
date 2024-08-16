import { uuid } from "../uuid";

describe('uuid', () => {
  it('should generate a valid UUID', () => {
    const generatedUUID = uuid();
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    expect(generatedUUID).toMatch(uuidRegex);
  });

  it('should generate different UUIDs on each call', () => {
    const uuid1 = uuid();
    const uuid2 = uuid();

    expect(uuid1).not.toBe(uuid2);
  });

  it('should use crypto.getRandomValues', () => {
    const spy = vi.spyOn(crypto, 'getRandomValues').mockImplementation((array) => {
      array[0] = 0xff; // Set a predictable value for testing
      return array;
    });

    const result = uuid();

    expect(spy).toHaveBeenCalled();
    expect(result).toBeDefined();

    spy.mockRestore();
  });
});
