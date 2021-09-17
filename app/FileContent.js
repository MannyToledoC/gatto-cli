function getIndexContent(name) {
  return `import ${name} from "./${name}";
export default ${name};`;
}

// look into other way to  format code so it doesnt mess up string
function getJsxContent(name) {
  return `import "./${name}.scss"
function ${name}() {
\treturn (
\t\t<>
\t\t</>
\t);
}
export default ${name};`;
}

function fileContentWrapper(type, name) {
  switch (type) {
    case ".jsx":
      return getJsxContent(name);
    case "index.jsx":
      return getIndexContent(name);
    default:
      return "";
  }
}

module.exports = {
  fileContentWrapper,
};
