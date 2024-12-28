const fs = require("fs");
const path = require("path");
const glob = require("glob");

const imageDirectories = [ "src/assets"]; 

const usedFiles = new Set();
const scanUsedFiles = (patterns) => {
  patterns.forEach((pattern) => {
    const files = glob.sync(pattern, { absolute: true });
    files.forEach((file) => usedFiles.add(path.resolve(file)));
  });
};

const deleteUnusedFiles = (directory) => {
  const allFiles = glob.sync(`${directory}/**/*.*`, { absolute: true });
  allFiles.forEach((file) => {
    if (!usedFiles.has(file)) {
      console.log(`Deleting unused file: ${file}`);
      fs.unlinkSync(file);
    }
  });
};

scanUsedFiles(["pages/**/*.*", "components/**/*.*", "src/**/*.*"]);

imageDirectories.forEach(deleteUnusedFiles);

console.log("Unused images deleted successfully.");
