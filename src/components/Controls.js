import React from "react";

const Controls = ({ onStart, onStop, isRunning }) => {
  return (
    <div className="controls">
      <button onClick={onStart} disabled={isRunning}>
        Start Simulation
      </button>
      <button onClick={onStop} disabled={!isRunning}>
        Stop Simulation
      </button>
    </div>
  );
};

export default Controls;
