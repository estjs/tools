import { templateCompile } from '../template';

describe('templateCompile', () => {
  it('should render plain text', () => {
    const template = new templateCompile('Hello, world!');
    template.compile();
    const result = template.render({});
    expect(result).toBe('Hello, world!');
  });
  it('should render variables', () => {
    const template = new templateCompile('Hello, <%= name %>!');
    template.compile();
    const result = template.render({ name: 'John' });
    expect(result).toBe('Hello, John!');
  });
  it('should escape HTML by default', () => {
    const template = new templateCompile('<%= html %>');
    template.compile();
    const result = template.render({ html: '<script>alert("XSS")</script>' });
    expect(result).toBe('&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;');
  });
  it('should render raw HTML', () => {
    const template = new templateCompile('<%- html %>');
    template.compile();
    const result = template.render({ html: '<strong>bold</strong>' });
    expect(result).toBe('<strong>bold</strong>');
  });
  it('should render code blocks', () => {
    const template = new templateCompile('<% if (show) { %>Hello, <%= name %>!<% } %>');
    template.compile();
    const result1 = template.render({ show: true, name: 'John' });
    expect(result1).toBe('Hello, John!');
    const result2 = template.render({ show: false, name: 'John' });
    expect(result2).toBe('');
  });
  it('should ignore comments', () => {
    const template = new templateCompile('<%# This is a comment %>Hello, world!');
    template.compile();
    const result = template.render({});
    expect(result).toBe('Hello, world!');
  });
  it('should render literals', () => {
    const template = new templateCompile('<%% <%= literal %> %%>');
    template.compile();
    const result = template.render({ literal: 'This is not a tag' });
    expect(result).toMatchInlineSnapshot('"<% This is not a tag %>"');
  });
  it('should throw an error when tags are not closed', () => {
    const template = new templateCompile('<% if (true) { %>Hello, world!');
    expect(() => template.compile()).toThrowErrorMatchingInlineSnapshot(
      `[SyntaxError: Unexpected token ')']`,
    );
  });
});
