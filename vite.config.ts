import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'react-time-ticker',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd'] // 'es' for ESM, 'umd' for CommonJS and other formats
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Mark these as external dependencies
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
