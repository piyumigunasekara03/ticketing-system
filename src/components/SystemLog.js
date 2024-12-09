import React from "react";

const SystemLog = ({ logs }) => {
  return (
    <div className="system-log">
      <h3>System Log</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default SystemLog;
