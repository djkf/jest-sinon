import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

function fixLocalImport() {
  return {
    name: 'fix-local-import',
    resolveId(source, importer) {
      if (source.startsWith('/Users')) {
        return source;
      }
      return null;
    },
  };
}

export default [
  {
    input: 'src/index.js',
    external: [
      'jest-matcher-utils',
      'expect/build/spyMatchers',
      'expect/build/toThrowMatchers'
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ['node_modules/**']
      }),
      fixLocalImport(),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];
