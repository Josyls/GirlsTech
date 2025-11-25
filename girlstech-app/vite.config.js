// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Define o caminho base para que o Vercel/GitHub Pages encontre os assets
  base: '/', 
})
