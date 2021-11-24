const webpack = require("webpack");

function buildMFSU(config) {
  const compiler = webpack(config);
  compiler.run((err, status) => {
    if (err) return;
    console.log("build done !!!!!!!!!!!!!!!!!");
  });
}

module.exports = buildMFSU;
