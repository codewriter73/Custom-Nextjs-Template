module.exports = {
  extends: ['next/core-web-vitals', 'airbnb-base'],
  rules: {
    'linebreak-style': 0,
    'no-restricted-exports': 0,
    'import/extensions': ['error', 'never', { svg: 'always' }],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
