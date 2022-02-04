/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  rootDir: './',
  moduleNameMapper: {
    obsidian: '<rootDir>/src/test-util/obsidian.test.ts',
  },
  moduleFileExtensions: ['js', 'ts'],
};
