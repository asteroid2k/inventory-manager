/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@config/(.*)$": "<rootDir>/src/config/$1",
    "^@controllers/(.*)$": "<rootDir>/src/controllers/$1",
    "^@middleware/(.*)$": "<rootDir>/src/middleware/$1",
    "^@utlis/(.*)$": "<rootDir>/src/utlis/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@routes/(.*)$": "<rootDir>/src/routes/$1",
  },
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverage: true,
};
