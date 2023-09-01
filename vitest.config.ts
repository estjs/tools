import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    environment: 'jsdom',
    coverage: {
      exclude: ['index.ts'],
    },
    globals: true,
  },
});
