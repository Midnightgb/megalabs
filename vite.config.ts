/// <reference types="vitest" />
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@img': path.resolve(__dirname, './src/assets/img'),
      '@icons': path.resolve(__dirname, './src/assets/img/icons'),
      '@products': path.resolve(__dirname, './src/assets/img/general'),
      '@common': path.resolve(__dirname, './src/components/common'),
    }
  }
})