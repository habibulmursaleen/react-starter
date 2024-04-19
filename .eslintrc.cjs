module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  ignorePatterns: ["build/"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "import/no-extraneous-dependencies": "off",
    "import/no-cycle": "off",
    "react/require-default-props": "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
  },
};
