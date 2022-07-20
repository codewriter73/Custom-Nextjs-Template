module.exports = {
    '*.{js,jsx,ts,tsx,css,json}': ['eslint --fix', 'eslint'],
    '**/*.ts?(x)': () => 'tsc --noEmit --pretty',
  };