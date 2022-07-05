module.exports = {
  collectCoverage: true,
  verbose: true,
  moduleDirectories: ['node_modules'],
  collectCoverageFrom: [
    './src/**/*.js',
    '!./node_modules/',
    '!./src/**/index.js'
  ],
};
