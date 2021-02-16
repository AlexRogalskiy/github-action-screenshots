module.exports = {
  roots: ['<rootDir>/tests/'],
  verbose: true,
  clearMocks: true,
  moduleFileExtensions: ['js'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.js', '**/__tests__/**/?(*.)+(spec|test).js'],
  testRunner: 'jest-circus/runner',
  testPathIgnorePatterns: ['/node_modules/', '/__fixtures__/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '!**/dist/**',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/generated/**',
    '!**/__fixtures__/**',
    '!**/scenarios/**',
    '!**/redirects/**',
  ],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  coverageDirectory: './coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
}
