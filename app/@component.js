const util = require("../util");
const path = require("path");
const FileContent = require("./FileContent");

const files = [
  { item: ".scss", content: "" },
  { item: ".jsx", content: "" },
  { item: "index.jsx", content: "" },
];
// const url = "./src/components/";
const url = path.join("src", "components");

function createComponent(name) {
  // const locationUrl = `${url}${name}/`;
  const locationUrl = path.join(url, name);

  util.createDir(locationUrl);
  files.forEach((type) => {
    type.item != "index.jsx"
      ? toFullLocation(locationUrl, type.item, name)
      : toIndexLocation(locationUrl, type.item, name);
  });
  console.log(`\n🎊🎉 The ${name} component was created! 🎉🎊`);
}

function toFullLocation(locationUrl, item, name) {
  let fullUrl = path.join(locationUrl, `${name}${item}`);
  util.writeToFile(
    //
    fullUrl,
    FileContent.fileContentWrapper(item, name)
  );
}
function toIndexLocation(locationUrl, item, name) {
  let fullUrl = path.join(locationUrl, item);
  util.writeToFile(
    //
    fullUrl,
    FileContent.fileContentWrapper(item, name)
  );
}

module.exports = {
  createComponent,
};
