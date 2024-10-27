/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@img': path.resolve(__dirname, './src/assets/img'),
      '@gastro-desktop': path.resolve(__dirname, './src/assets/img/gastro/desktop'),
      '@gastro-tablet': path.resolve(__dirname, './src/assets/img/gastro/tablet'),
      '@gastro-mobile': path.resolve(__dirname, './src/assets/img/gastro/mobile'),
      '@common': path.resolve(__dirname, './src/components/common'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
