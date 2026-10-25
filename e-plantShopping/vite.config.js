import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' lets the built site work on GitHub Pages (any repo name) and other hosts.
export default defineConfig({
  plugins: [react()],
  base: './',
});
