// vite.config.js (USANDO MODULE.EXPORTS)

const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

// Use module.exports para compatibilidade com o ambiente Vercel/CJS
module.exports = defineConfig({
  plugins: [react()],
  base: '/', 
});
