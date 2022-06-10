import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  setupFiles: ['<rootDir>/test/env.ts'],
  moduleNameMapper: {
    '^infra/(.*)': '<rootDir>/src/infra/$1',
    '^core/(.*)': '<rootDir>/src/core/$1',
  },
  modulePathIgnorePatterns: ['dist/'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 95,
      functions: 100,
      lines: 100,
    },
  },
};

export default config;
