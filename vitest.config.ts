import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    environment: 'jsdom',
    coverage: {
      exclude: ['index.ts'],
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
  },
});
