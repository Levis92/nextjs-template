module.exports = {
  '**/*.+(js|ts|tsx)': [
    'eslint --fix',
    'prettier --write',
    'jest --findRelatedTests',
  ],
};
