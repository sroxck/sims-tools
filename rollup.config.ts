import path from 'path'
import typescript from 'rollup-plugin-typescript2';
import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'
  const input = 'package/index.ts'

export default [
  {
    input,
    output: [
      {
        preserveModules: true, // 保留导入的模块为单独文件
        dir: 'dist/es',
        format: 'es'
      }
    ],
    plugins: [
      typescript({
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: false,
            declaration: true,
            declarationMap: false,
            rootDir: './package',
            outDir: 'dist',
            declarationDir: 'dist'
          }
        }
      }),
      esbuild({
        include: /\.[jt]s$/,
        minify: process.env.NODE_ENV === 'production',
        target: 'es2015'
      })
    ]
  },
  {
    input: 'package/index.ts',
    output: [
      {
        preserveModules: true,
        dir: 'dist/cjs',
        format: 'cjs',
        exports: 'auto'
      }
    ],
    plugins: [
      typescript(),
      esbuild({
        include: /\.[jt]s$/,
        minify: process.env.NODE_ENV === 'production',
        target: 'es2015'
      })
    ]
  },
  {
    input: 'package/index.ts',
    output: [
      {
        name: 'sims-tools',
        dir: 'dist/umd',
        format: 'umd'
      }
    ],
    plugins: [
      terser(),
      esbuild({
        include: /\.[jt]s$/,
        minify: process.env.NODE_ENV === 'production',
        target: 'es2015'
      })
    ]
  }
]
