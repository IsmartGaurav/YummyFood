module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  env: {
    development: {
      presets: [["@babel/preset-react", { development: true }]],
    },
  },
};
