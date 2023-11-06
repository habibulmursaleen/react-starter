/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import testPlugin from 'vite-plugin-test';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), testPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});
