// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O Vercel precisa que o base seja a raiz
export default defineConfig({
  plugins: [react()],
  base: '/', 
})