const buildMFSU = require("./build");
const startService = require("../server/index");

class MFSUPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.done.tap("done", () => {
      console.log("done");
      buildMFSU(this.options);
      startService();
    });
  }
}

module.exports = MFSUPlugin;
