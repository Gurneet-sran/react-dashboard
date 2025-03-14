/// <reference types="node" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@Design': resolve(__dirname, './src/design'),
      '@Features': resolve(__dirname, './src/features'),
      '@Components': resolve(__dirname, './src/components'),
      '@Pages': resolve(__dirname, './src/pages'),
      '@Layouts': resolve(__dirname, './src/layouts'),
      '@Assets': resolve(__dirname, './src/assets'),
      '@Styles': resolve(__dirname, './src/styles'),
      '@Utils': resolve(__dirname, './src/utils'),
      '@Types': resolve(__dirname, './src/types'),
      '@Constants': resolve(__dirname, './src/constants'),
      '@Hooks': resolve(__dirname, './src/hooks'),
      '@Services': resolve(__dirname, './src/services'),
      '@Store': resolve(__dirname, './src/store'),
    },
  },
})
