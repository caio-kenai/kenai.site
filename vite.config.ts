import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    target: 'es2022',
    cssMinify: true,
    assetsInlineLimit: 2048,
    reportCompressedSize: false,
  },
  server: {
    port: 5173,
    open: false,
  },
});
