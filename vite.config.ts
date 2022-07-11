// vite.config.ts
import path, { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'demo-lib',
      formats: ['es', 'umd'], // default：['es', 'umd']
      fileName: (format) => `index.${format}.js`
    }
  },
 
})