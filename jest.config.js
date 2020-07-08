module.exports = {
  setupFilesAfterEnv: ['./src/index'],
  collectCoverage: true,
  verbose: true,
  collectCoverageFrom: ['./src/**/*.js', '!./node_modules/']
};
