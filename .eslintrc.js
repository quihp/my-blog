/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y"],
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "react/react-in-jsx-scope": "off"
  },
}
