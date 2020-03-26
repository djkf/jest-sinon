module.exports = {
  collectCoverage: true,
  verbose: true,
  collectCoverageFrom: [
    './src/**/*.js',
    '!./node_modules/',
    '!./src/**/index.js'
  ]
};
