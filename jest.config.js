module.exports = {
  projects: ["<rootDir>/packages/*"],
  collectCoverage: true,
  verbose: true,
  collectCoverageFrom: [
    "src/**/*.js",
    "!<rootDir>/node_modules/",
    "!src/**/index.js"
  ]
};
