/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^@config/(.*)$": "<rootDir>/src/config/$1",
    "^@controllers/(.*)$": "<rootDir>/src/controllers/$1",
    "^@middleware/(.*)$": "<rootDir>/src/middleware/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@routes/(.*)$": "<rootDir>/src/routes/$1",
    "^@schema/(.*)$": "<rootDir>/src/schema/$1",
    "^test/(.*)$": "<rootDir>/test/$1"
  },
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverage: true,
  testPathIgnorePatterns: ["/config"],
  setupFiles: ["dotenv/config"],
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  }
};
