import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/chethiya-portfolio/' : '/',
  // ✅ PERF: pre-bundle GSAP so it doesn't cause a waterfall on first load
  optimizeDeps: {
    include: ['gsap', 'react-icons/io5', 'react-icons/hi'],
  },
  build: {
    // ✅ PERF: target modern browsers — avoids heavy polyfill/transform overhead
    target: 'esnext',
    // ✅ PERF: inline small assets (< 4 KB) as base64 to save round-trips
    assetsInlineLimit: 4096,
    // ✅ PERF: split vendor chunks so browsers can cache React separately
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-icons': ['react-icons'],
          'vendor-gsap': ['gsap'],
        }
      }
    },
    // ✅ PERF: enable CSS code splitting
    cssCodeSplit: true,
    // ✅ PERF: use terser-compatible minification for smaller output
    minify: 'esbuild',
  }
});
