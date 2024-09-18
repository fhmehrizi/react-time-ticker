import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
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
    },
    //Generates sourcemaps for the built files,
    //aiding in debugging.
    sourcemap: true,
    //Clears the output directory before building.
    emptyOutDir: true,
  }
})
