const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());  // Middleware to parse JSON requests

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Ticketing System API!");
});


// Endpoint to handle configuration updates
app.post("/config/update", (req, res) => {
  const { totalTickets, ticketReleaseRate, customerRetrievalRate, vendorCount } = req.body;

  // Here, you can process the configuration data
  console.log("Received configuration update:", req.body);

  // Simulate saving the configuration to a database or in-memory data
  // You can update the config object or call a function to handle it
  res.json({ success: true, message: "Configuration updated successfully!" });
});

// Endpoint to start the simulation
app.post("/simulation/start", (req, res) => {
  // Here, you can trigger the start of the simulation based on the provided config
  console.log("Starting simulation with config:", req.body);

  // Simulate starting the simulation
  res.json({ success: true, message: "Simulation started successfully!" });
});

// Endpoint to stop the simulation
app.post("/simulation/stop", (req, res) => {
  // Here, you can trigger the stop of the simulation
  
  console.log("Stopping simulation with config:", req.body);

  // Simulate stopping the simulation
  res.json({ success: true, message: "Simulation stopped successfully!" });
});

// Server setup
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
