import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default [
  {
    input: { 'jest-sinon': 'src/index.js', 'assertions': 'src/assertions/index.js' },
    external: ['jest-matcher-utils'],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ['node_modules/**']
      })
    ],
    output: [
      { dir: 'dist/cjs', format: 'cjs' },
      {
        dir: 'dist/esm',
        format: 'es',
        entryFileNames: '[name].mjs',
        chunkFileNames: '[name]-[hash].mjs'
      }
    ]
  }
];
