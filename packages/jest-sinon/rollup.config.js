import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: {
      name: "jest-sinon",
      file: pkg.browser,
      format: "umd"
    },
    plugins: [resolve(), commonjs(), babel()]
  },
  {
    input: "src/index.js",
    external: ["jest-matcher-utils"],
    plugins: [resolve(), babel()],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ]
  }
];
