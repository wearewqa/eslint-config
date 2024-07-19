/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    es2017: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "./.eslintrc.js",
  ],
  ignorePatterns: ["*-test.ts", "*-test.tsx"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
  },
  rules: {
    "no-shadow": [
      "error",
      {
        builtinGlobals: false,
      },
    ],
    "jsx-quotes": ["error", "prefer-double"],
    "no-duplicate-imports": "off",
    "no-template-curly-in-string": "error",
    "block-scoped-var": "error",
    curly: ["error", "all"],
    eqeqeq: "error",
    "max-classes-per-file": ["error", 1],
    "no-alert": "warn",
    "no-console": "off",
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],
    "no-implicit-coercion": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-multi-spaces": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-return-await": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "prefer-promise-reject-errors": "error",
    radix: "error",
    "no-undefined": "error",
    semi: "off",
    "@typescript-eslint/semi": ["error"],
    "array-bracket-newline": [
      "error",
      {
        multiline: true,
      },
    ],
    "comma-dangle": "off",
    "comma-style": "error",
    "eol-last": "error",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "new-parens": "error",
    "no-bitwise": "warn",
    "no-lonely-if": "warn",
    "no-multiple-empty-lines": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-tabs": "off",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always"],
    "switch-colon-spacing": "error",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": "error",
    "generator-star-spacing": ["error", "after"],
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "object-shorthand": ["error", "always"],
    "prefer-destructuring": "warn",
    "rest-spread-spacing": ["error", "never"],
    "sort-imports": "off",
    "template-curly-spacing": "error",
    "@typescript-eslint/member-ordering": "warn",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/brace-style": ["error", "1tbs"],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/func-call-spacing": ["error", "never"],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/no-parameter-properties": 0,
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/interface-name-prefix": "off",
  },
};
