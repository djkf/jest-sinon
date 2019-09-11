module.exports = {
  projects: ["<rootDir>/packages/*"],
  collectCoverage: true,
  verbose: true,
  collectCoverageFrom: [
    "packages/*/src/**/*.js",
    "!<rootDir>/node_modules/",
    "!packages/*/src/**/index.js"
  ]
};
