import postcss from "rollup-plugin-postcss";
import { babel } from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "./packages/axiom-components/src/index.js",
    output: [
      {
        dir: "./packages/axiom-components/dist/cjs",
        format: "cjs",
      },
      {
        dir: "./packages/axiom-components/dist/esm",
        format: "esm",
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        extract: true,
      }),
      babel({
        babelHelpers: "bundled",
      }),
      nodeResolve(),
      json(),
      commonjs(),
    ],
    external: [
      "react",
      "react-dom",
      "@brandwatch/axiom-materials",
      "prop-types",
    ],
  },
  {
    input: "./packages/axiom-materials/src/index.js",
    output: [
      {
        dir: "./packages/axiom-materials/dist/cjs",
        format: "cjs",
      },
      {
        dir: "./packages/axiom-materials/dist/esm",
        format: "esm",
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        extract: true,
      }),
      babel({
        babelHelpers: "bundled",
      }),
      json(),
      nodeResolve(),
      commonjs(),
    ],
    external: [
      "react",
      "react-dom",
      "@brandwatch/axiom-components",
      "prop-types",
    ],
  },
  {
    input: "./packages/axiom-composites/src/index.js",
    output: [
      {
        dir: "./packages/axiom-composites/dist/cjs",
        format: "cjs",
      },
      {
        dir: "./packages/axiom-composites/dist/esm",
        format: "esm",
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        extract: true,
      }),
      babel({
        babelHelpers: "bundled",
      }),
      json(),
      nodeResolve(),
      commonjs(),
    ],
    external: [
      "react",
      "react-dom",
      "@brandwatch/axiom-components",
      "prop-types",
    ],
  },
];
