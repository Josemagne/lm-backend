/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: ["js", "ts"],
  roots: ["<rootDir/src>"],
  testMatch: ["tests/**/*.ts", "**/?(*.)+(spec|test).[tj]s"],
  transform: {
    "^.+\\.(ts)$": "ts-jest"
  }
};
