import React from "react";
import axios from "axios";

const Controls = ({ onStart, onStop, isRunning, config }) => {
  const handleStart = () => {
    // Send start simulation request to the backend
    axios
      .post("http://localhost:3001/simulation/start", config)  // Replace with correct endpoint
      .then((response) => {
        console.log("Simulation started:", response.data);
        onStart(); // Start the simulation
      })
      .catch((error) => {
        console.error("Error starting simulation:", error);
      });
  };

  const handleStop = () => {
    // Send stop simulation request to the backend
    axios
      .post("http://localhost:3001/simulation/stop", config)  // Replace with correct endpoint
      .then((response) => {
        console.log("Simulation stopped:", response.data);
        onStop(); // Stop the simulation
      })
      .catch((error) => {
        console.error("Error stopping simulation:", error);
      });
  };

  return (
    <div className="controls">
      <button onClick={handleStart} disabled={isRunning}>
        Start Simulation
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop Simulation
      </button>
    </div>
  );
};

export default Controls;

