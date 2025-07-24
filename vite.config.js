import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Ajuste o `base` se for servir o site em subdiretório (ex: /G6-Site/)
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // atalho para importar ex: @/components
    },
  },
  //base: '/', // ou "/G6-Site/" se for necessário subir nesse caminho no futuro
  base: '/site-teste/',
  build: {
    outDir: 'dist',
    sourcemap: false, // true se quiser debug
  },
  server: {
    host: true,
    port: 3000,
    open: true,
    strictPort: false,
  }
});
