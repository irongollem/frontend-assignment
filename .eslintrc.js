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
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['babel', 'jest'],
  rules: {
    strict: 0
  }
}
