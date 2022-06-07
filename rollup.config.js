import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
const html = require('@rollup/plugin-html');
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  input: './src/index.js',
  output: {
    file: './dist/main.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    babel({ babelHelpers: 'bundled' }),
    commonjs(),
    terser({
      module: true,
      format: { comments: false },
    }),
    html(),
  ],
};
