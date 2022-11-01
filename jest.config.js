module.exports = {
  preset: 'ts-jest',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testRegex: '/src/__tests__/.*\\.test.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>src/__tests__/setupTests.ts'],
  collectCoverage: true,
  // collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  globals: {
    'ts-jest': {
      enableTsDiagnostics: true
    }
  }
};
