
const jestConfig = {
  bail: true,
  verbose: true,
  globals: {
    NODE_ENV: 'test',
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|scss|less)$': '<rootDir>/config/jest/styleMock.js',
  },
  roots: ['<rootDir>/client/'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/config/jest/jest.transformer.js',
  },
}

module.exports = jestConfig
