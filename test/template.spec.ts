import { templateCompile } from '../src';

describe('templateCompile', () => {
  it('templateCompile', () => {
    const temp = new templateCompile(`
    <html>
      <head><%= title %></head>
      <body>
        <%# 这里是注释 %>
        <%- before %>
        <% if (show) { %>
          <div>root</div>
        <% } %>
      </body>
    </html>
    `);

    temp.compile();
    expect(temp.render({ show: true, title: 'hello', before: '<div>xx</div>' }))
      .toMatchInlineSnapshot(`
        "
            <html>
              <head>hello</head>
              <body>
                
                <div>xx</div>
                
                  <div>root</div>
                
              </body>
            </html>
            "
      `);
  });
});
