import dayjs from 'dayjs';
import { dateFormatter, escapeHtml, hasCn, unescapeHtml } from '../..';
import { humanize } from '../humanize';

describe('string', () => {
  it('formater', () => {
    const date = 1656510155000;
    expect(dateFormatter(date, 'YYYY-MM-DD HH:mm:ss')).toBe(
      dayjs(1656510155000).format('YYYY-MM-DD HH:mm:ss'),
    );
    expect(dateFormatter(date, 'YYYY/MM/DD HH:mm:ss')).toBe(
      dayjs(1656510155000).format('YYYY/MM/DD HH:mm:ss'),
    );
  });

  it('escapeHtml', () => {
    expect(escapeHtml('<html><a link="#test/?query=1"></a><<html>')).toMatchInlineSnapshot(
      '"&lt;html&gt;&lt;a link=&quot;#test/?query=1&quot;&gt;&lt;/a&gt;&lt;&lt;html&gt;"',
    );
  });
  it('unescapeHtml', () => {
    expect(
      unescapeHtml(
        '&lt;html&gt;&lt;a link=&quot;#test/?query=1&quot;&gt;&lt;/a&gt;&lt;&lt;html&gt;',
      ),
    ).toMatchInlineSnapshot(`"<html><a link="#test/?query=1"></a><<html>"`);
  });

  it('hasCn', () => {
    expect(hasCn('Naruto')).toBe(false);
    expect(hasCn('Naruto = 火影忍者')).toBe(true);
  });

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
