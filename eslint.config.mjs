import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginImportHelpers from "eslint-plugin-import-helpers";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "eslint-plugin-import-helpers": eslintPluginImportHelpers,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "eslint-plugin-import-helpers/order-imports": [
        "error",
        {
          groups: [
            ["/^react$/", "/^react/.+$/"],
            ["/^next$/", "/^next/.+$/"],
            "module",
            "/^~/processes/",
            "/^~/widgets/",
            "/^~/features/",
            "/^~/entities/",
            "/^~/shared/",
            ["parent", "sibling", "index"],
          ],

          newlinesBetween: "always",

          alphabetize: {
            order: "asc",
            ignoreCase: true,
          },
        },
      ],
    },
  }
);
