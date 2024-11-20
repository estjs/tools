import { humanize } from '../humanize';

describe('humanize', () => {
  it('humanize', () => {
    expect(humanize(0)).toBe('0 B');
    expect(humanize(10)).toBe('10.0 B');
    expect(humanize(100)).toBe('100 B');
    expect(humanize(1024)).toBe('1.00 KB');
    expect(humanize(10000)).toBe('9.77 KB');
    expect(humanize(100000)).toBe('97.7 KB');
    expect(humanize(1000000)).toBe('977 KB');
    expect(humanize(10000000)).toBe('9.54 MB');
    expect(humanize(100000000)).toBe('95.4 MB');
    expect(humanize(1000000000)).toBe('954 MB');
    expect(humanize(10000000000)).toBe('9.31 GB');
    expect(humanize(100000000000)).toBe('93.1 GB');
    expect(humanize(1000000000000)).toBe('931 GB');
    expect(humanize(10000000000000)).toBe('9.09 TB');

    expect(humanize(1024 * 1024)).toBe('1.00 MB');
    expect(humanize(1024 * 1024 * 1024)).toBe('1.00 GB');
    expect(humanize(1024 * 1024 * 1024 * 1024)).toBe('1.00 TB');
    expect(humanize(1024 * 1024 * 1024 * 1024 * 1024)).toBe('1.00 PB');
    expect(humanize(1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('1.00 EB');
    expect(humanize(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('1.00 ZB');
    expect(humanize(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('1.00 YB');
    expect(humanize(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('1024 YB');
  });
});
