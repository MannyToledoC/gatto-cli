const util = require("../util");
const FileContent = require("./FileContent");

const files = [
  { item: ".scss", content: "scss" },
  { item: ".jsx", content: "jsx" },
  { item: "index.jsx", content: "index" },
];
const url = "./src/containers/";

function createContainer(name) {
  const locationUrl = `${url}${name}/`;
  util.createDir(locationUrl);
  files.forEach((type) => {
    type.item != "index.jsx"
      ? util.writeToFile(
          `${locationUrl}${name}${type.item}`,
          FileContent.fileContentWrapper(type.item, name)
        )
      : util.writeToFile(
          `${locationUrl}${type.item}`,
          FileContent.fileContentWrapper(type.item, name)
        );
  });
  console.log(`\n🎊🎉 The ${name} container was created! 🎉🎊`);
}

module.exports = {
  createContainer,
};
