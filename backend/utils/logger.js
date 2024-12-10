// utils/logger.js
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/app.log');

const log = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] INFO: ${message}\n`;

  // Write to console and log file
  console.log(logMessage);
  fs.appendFileSync(logFilePath, logMessage);
};

const error = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ERROR: ${message}\n`;

  // Write to console and log file
  console.error(logMessage);
  fs.appendFileSync(logFilePath, logMessage);
};

module.exports = { log, error };
