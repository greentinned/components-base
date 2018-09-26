import typescript from 'rollup-plugin-typescript'
import { eslint } from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.tsx',
  output: {
    name: 'components-base',
    file: 'build/index.js',
    format: 'umd',
    sourcemap: 'inline',
    globals: {
      react: 'React',
      'bem-react-core': 'BemReactCore'
    }
  },
  external: ['bem-react-core', 'react'],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    eslint({
      exclude: ['node_modules/**', 'build/**']
    }),
    typescript()
  ]
}
