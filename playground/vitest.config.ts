import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';
import Jsx from '@vitejs/plugin-vue-jsx';
export default defineConfig({
  plugins: [Vue(), Jsx()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
