import { escapeHtml, unescapeHtml } from '../escapeHtml';

describe('dateFormatter', () => {
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
});
