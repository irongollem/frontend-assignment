module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  plugins: ['babel', 'jest'],
  rules: {
  }
}
