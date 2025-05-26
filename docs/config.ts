import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Tools',
  description: 'A collection of JavaScript utilities',
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [{ text: 'Getting Started', link: '/guide/' }],
      },
      {
        text: 'API',
        items: [
          { text: 'String', link: '/api/string' },
          { text: 'Number', link: '/api/number' },
          { text: 'Object', link: '/api/object' },
          { text: 'Array', link: '/api/array' },
          { text: 'Color', link: '/api/color' },
          { text: 'URL', link: '/api/url' },
          { text: 'Function', link: '/api/function' },
          { text: 'Utils', link: '/api/utils' },
          { text: 'Constants', link: '/api/constants' },
          { text: 'Event', link: '/api/event' },
          { text: 'Storage', link: '/api/storage' },
          { text: 'Promise', link: '/api/promise' },
        ],
      },
    ],
  },
});
