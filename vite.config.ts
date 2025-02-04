import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: "/spinners-website/",
  build: {
    terserOptions: {
      compress: {
        unsafe: true,
      }
    }
  }
});