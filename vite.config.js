import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Otimizações de build
    cssCodeSplit: true, // Separa CSS por chunks para carregamento paralelo
    minify: 'esbuild', // Esbuild é mais rápido que Terser
    cssMinify: 'esbuild',
    // Otimiza tamanho do output
    assetsInlineLimit: 4096, // Inline assets pequenos (< 4kb)
    rollupOptions: {
      output: {
        // Separa vendor chunks para melhor cache
        manualChunks(id) {
          // Separa React e React-DOM em chunk separado
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        },
        // Otimiza estrutura de arquivos
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return 'assets/img/[name]-[hash][extname]';
          }
          if (/css/i.test(ext)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Aumenta limite de aviso
    chunkSizeWarningLimit: 600,
    // Otimiza source maps (desabilita em produção para reduzir tamanho)
    sourcemap: false,
  },
})
