import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';
import memory from 'rollup-plugin-memory';

export default {
  // input: 'main.js',
  input: 'main.js',
  output: [
    {
      file: 'dist/es/redux-modal-router.js',
      format: 'es',
    },
    {
      file: 'dist/cjs/redux-modal-router.js',
      format: 'cjs',
    },
  ],
  plugins: [
    memory({
      path: 'main.js',
      contents: `
// @flow
if (process.env.NODE_ENV === 'production') {
module.exports = require('./redux-modal-router.production.js');
} else {
module.exports = require('./redux-modal-router.development.js');
}`,
    }),
    // localResolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
