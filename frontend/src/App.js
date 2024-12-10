import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ConfigurationForm from "./components/ConfigurationForm";
import Controls from "./components/Controls";
import SystemLog from "./components/SystemLog";
import "./App.css";

function App() {
  const [config, setConfig] = useState({
    totalTickets: "",
    ticketReleaseRate: "",
    customerRetrievalRate: "",
    vendorCount: "",
  });

  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    if (
      !config.totalTickets ||
      !config.ticketReleaseRate ||
      !config.customerRetrievalRate ||
      !config.vendorCount
    ) {
      alert("Please fill all fields with positive numbers.");
      return;
    }
    setIsRunning(true);
    logMessage(
      `Ticket Exchange initialized. Total Tickets: ${config.totalTickets}, Release Rate: ${config.ticketReleaseRate}/min, Retrieval Rate: ${config.customerRetrievalRate}/min, Vendors: ${config.vendorCount}`
    );
  };

  const handleStop = () => {
    setIsRunning(false);
    logMessage("Simulation halted. System resources released.");
  };

  const logMessage = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prevLogs) => [`[${timestamp}] ${message}`, ...prevLogs]);
  };

  const updateConfig = (field, value) => {
    setConfig((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <ConfigurationForm config={config} updateConfig={updateConfig} />
        <Controls onStart={handleStart} onStop={handleStop} isRunning={isRunning} />
        <SystemLog logs={logs} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

