module.exports = {
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  // we need to create this file
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.js',
    '<rootDir>/test/setup-env.js',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '\\.(scss|css)$': '<rootDir>/test/__mock__/styleMock.js',
  },
  transformIgnorePatterns: ['/node_modules/'],
  modulePaths: ['<rootDir>'],
};
