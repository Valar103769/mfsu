const express = require("express");
const path = require("path");
const app = express();
const PORT = 5001;

function startService() {
  app.use(express.static(path.resolve(__dirname, "../dist")));
  app.listen(PORT, () => {
    console.log(`listen on ${PORT}`);
  });
}

module.exports = startService;
