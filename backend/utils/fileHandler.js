const fs = require("fs");

class FileHandler {
  static readFile(filePath) {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading file:", error);
      return null;
    }
  }

  static writeFile(filePath, data) {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log("File written successfully");
    } catch (error) {
      console.error("Error writing file:", error);
    }
  }
}

module.exports = FileHandler;
