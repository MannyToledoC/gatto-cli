const { exec } = require("child_process");
var fs = require("fs");

function createDir(url) {
  if (!fs.existsSync(url)) {
    fs.mkdirSync(url, { recursive: true });
    console.log(`${url}`);
  }
}

function writeToFile(url, content) {
  if (!fs.existsSync(url)) {
    fs.writeFileSync(url, content, (err) => {
      console.log(err);
    });
    console.log(`${url} created 📢`);
  }
}

module.exports = {
  writeToFile,
  createDir,
};
