module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/test/**',
    '!<rootDir>/src/drivers/api/server.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/presentation/helpers/*.ts',
    '!<rootDir>/src/presentation/errors/*.ts',
    '!<rootDir>/src/presentation/protocols/*.ts',
    '!<rootDir>/src/drivers/api/adapters/**',
    '!<rootDir>/src/drivers/api/middlewares/**',
    '!<rootDir>/src/drivers/api/config/**',
    '!<rootDir>/src/drivers/db/mysql/helpers/**',
    '!<rootDir>/src/drivers/db/mysql/models/**',
    '!<rootDir>/src/factories/**/*.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  },
  clearMocks: true,
  setupFiles: [
    '<rootDir>/jest-dotenv-config.js'
  ]
}
