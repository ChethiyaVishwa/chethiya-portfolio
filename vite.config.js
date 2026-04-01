import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/chethiya-portfolio/' : '/',
  build: {
    // ✅ PERF FIX: split vendor chunks so browsers can cache React separately
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-icons': ['react-icons'],
          'vendor-gsap': ['gsap'],
        }
      }
    },
    // ✅ PERF FIX: enable CSS code splitting
    cssCodeSplit: true,
    // ✅ PERF FIX: use terser-compatible minification for smaller output
    minify: 'esbuild',
  }
});
