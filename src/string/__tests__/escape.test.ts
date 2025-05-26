import { escapeHTML } from '../';

describe('escapeHTML', () => {
  it('should escape HTML special characters', () => {
    expect(escapeHTML('<div>')).toBe('&lt;div&gt;');
    expect(escapeHTML('"quote"')).toBe('&quot;quote&quot;');
    expect(escapeHTML('&ampersand')).toBe('&amp;ampersand');
    expect(escapeHTML("'single'")).toBe('&#39;single&#39;');
  });

  it('should handle strings with multiple special characters', () => {
    expect(escapeHTML('<div class="test">&</div>')).toBe(
      '&lt;div class=&quot;test&quot;&gt;&amp;&lt;/div&gt;',
    );
  });

  it('should handle empty strings and strings without special characters', () => {
    expect(escapeHTML('')).toBe('');
    expect(escapeHTML('normal text')).toBe('normal text');
  });
});
