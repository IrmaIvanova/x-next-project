import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginTestingLibrary from "eslint-plugin-testing-library";
import eslintPluginJest from "eslint-plugin-jest";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];
const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript"
  ),
  {
    files: ["**/*.test.ts", "**/*.test.tsx"],
    plugins: {
      "testing-library": eslintPluginTestingLibrary,
      "jest": eslintPluginJest,
    },
    rules: {
      "testing-library/no-debugging-utils": "warn",
      "testing-library/prefer-screen-queries": "error",
      "jest/no-focused-tests": "error",
    },
  },
];

export default eslintConfig;
