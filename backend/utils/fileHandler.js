const fs = require("fs");

class FileHandler {
  static saveDataToFile(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
  }

  static readDataFromFile(filename) {
    if (fs.existsSync(filename)) {
      const rawData = fs.readFileSync(filename);
      return JSON.parse(rawData);
    }
    return null;
  }
}

module.exports = FileHandler;

