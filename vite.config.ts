import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { builtinModules } from 'module';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    port: 8080,
    open: 'http://localhost:8080/blog/',
    host: '0.0.0.0',
    proxy: {},
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@imgs': path.resolve(__dirname, './src/assets/imgs'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@const': path.resolve(__dirname, './src/constants/const'),
      '@test': path.resolve(__dirname, './test'),
      'node-fetch': 'isomorphic-fetch',
    },
  },
  base: 'http://www.zhuim.fun/blog/',
  assetsInclude: ['**/*.json'],
  optimizeDeps: {
    include: ['react', 'ReactDOM', 'react-router-dom', 'typescript'],
    exclude: ['electron'],
  },
  build: {
    minify: 'terser',
    outDir: 'myblog',
    rollupOptions: {
      output: {
        format: 'es',
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'src/assets/[ext]/[name]-[hash].[ext]',
      },
      external: ['electron', ...builtinModules],
    },
  },
});
