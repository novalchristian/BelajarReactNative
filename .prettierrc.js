module.exports = {
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    ...
    'prettier/prettier': 'error',
  },
  "scripts": {
    ...
    "format": "prettier --check ./src",
    ...
  },
};
