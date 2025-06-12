import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    environment: 'jsdom',
    coverage: {
      exclude: ['**/index.ts', '**/types.ts'],
      include: ['src/**/*.{ts,tsx}'],
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
  },
});
