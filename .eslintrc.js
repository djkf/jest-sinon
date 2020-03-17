module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    "jest/globals": true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["jest"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "prettier/prettier": "error"
  }
};
