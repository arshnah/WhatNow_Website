import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Reading localStorage / measuring the DOM after mount legitimately needs
      // setState inside an effect here (theme, language, scroll affordances).
      // Keep it visible as a warning rather than a build-blocking error.
      "react-hooks/set-state-in-effect": "warn",
      // Raw apostrophes/quotes in JSX content render fine; the rule is cosmetic noise.
      "react/no-unescaped-entities": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
