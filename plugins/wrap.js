const deepclone = require("deepclone");
const MSFUPlugin = require("./mfsu-webpack-plugin");

function wrap(webpackConfig) {
  const fakeWebpackConfig = deepclone(webpackConfig);
  fakeWebpackConfig.plugins.push(new MSFUPlugin(webpackConfig));
  return fakeWebpackConfig;
}

module.exports = wrap;
