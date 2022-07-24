module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb-base',
    'plugin:cypress/recommended',
  ],
  rules: {
    'linebreak-style': 0,
    'no-restricted-exports': 0,
    'import/extensions': ['error', 'never', { svg: 'always' }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts', '**/*.test.tsx', '**/*.cy.js', 'cypress.config.ts'] },
    ],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
