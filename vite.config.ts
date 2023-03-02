// vite.config.ts
import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import Intermediary from './plugins/vite-plugin-intermediary'
export default defineConfig({
  plugins:[Intermediary({
    dir:'./package',
    output:'exports.ts',
    scan:true,
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'demo-lib',
      formats: ['es', 'umd'], // default：['es', 'umd']
      fileName: (format) => `index.${format}.js`
    }
  },
 
})
