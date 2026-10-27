import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

const appRoot = fileURLToPath(new URL('./reading_list/src/', import.meta.url));

export default defineConfig({
  root: appRoot,
  plugins: [react()],
  resolve: {
    alias: {
      '@': appRoot,
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
