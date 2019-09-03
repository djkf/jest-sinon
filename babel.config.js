module.exports = {
  babelrcRoots: ["packages/*"],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ]
};
