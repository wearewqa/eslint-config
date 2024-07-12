// This is a patch so that eslint will load the plugins as dependencies. Otherwise we can to install EVERYTHING in th root project
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["prettier", "plugin:import/recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  settings: {
    "import/ignore": ["react-native"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "no-debugger": 0,
    "no-use-before-define": "off",
    "import/no-cycle": "off",
    "no-alert": 0,
    "no-await-in-loop": 0,
    "no-return-assign": ["error", "except-parens"],
    "no-restricted-syntax": [
      2,
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "no-unused-vars": [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "res|next|^err|^_",
        varsIgnorePattern: "^_",
        // Broken in TypeSCript.Want this turned on
        // destructuredArrayIgnorePattern: '^_',
      },
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "arrow-body-style": [2, "as-needed"],
    "no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true,
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "no-param-reassign": [
      2,
      {
        props: false,
      },
    ],
    "no-console": 0,
    "import/prefer-default-export": 0,
    "import/no-useless-path-segments": ["error"],
    import: 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "react/no-array-index-key": 0,
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/function-component-definition": 0,
    "jsx-a11y/accessible-emoji": 0,
    "react/require-default-props": 0,
    radix: 0,
    "no-shadow": [
      2,
      {
        hoist: "all",
        allow: ["resolve", "reject", "done", "next", "err", "error"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        semi: true,
        trailingComma: "es5",
        singleQuote: false,
        arrowParens: "always",
        proseWrap: "never",
        tabWidth: 2,
        useTabs: false,
        printWidth: 80,
        endOfLine: "auto",
      },
    ],
    "jsx-a11y/href-no-hash": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/comma-dangle": ["off"],
    "react/jsx-props-no-spreading": "off",
    "import/order": [
      1,
      {
        groups: [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ],
        pathGroups: [
          {
            pattern: "components",
            group: "internal",
            position: "before",
          },
          {
            pattern: "common",
            group: "internal",
            position: "before",
          },
          {
            pattern: "routes/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "assets/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
      },
    ],
  },
  plugins: ["html", "prettier", "react-hooks"],
};
