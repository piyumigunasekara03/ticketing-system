import React from "react";
import axios from "axios";

const ConfigurationForm = ({ config, updateConfig }) => {
  const handleChange = (field) => (e) => {
    const value = e.target.value;
    updateConfig(field, value ? Math.max(0, Number(value)) : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send data to the backend via POST request
    axios
      .post("http://localhost:3001/config/update", config)  // Replace with the correct endpoint
      .then((response) => {
        console.log("Configuration updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating configuration:", error);
      });
  };

  return (
    <form className="configuration-form" onSubmit={handleSubmit}>
      <label>
        Total Tickets
        <input
          type="number"
          value={config.totalTickets}
          onChange={handleChange("totalTickets")}
          placeholder="Max ticket capacity"
        />
      </label>
      <label>
        Ticket Release Rate
        <input
          type="number"
          value={config.ticketReleaseRate}
          onChange={handleChange("ticketReleaseRate")}
          placeholder="Tickets/minute"
        />
      </label>
      <label>
        Customer Retrieval Rate
        <input
          type="number"
          value={config.customerRetrievalRate}
          onChange={handleChange("customerRetrievalRate")}
          placeholder="Customers/minute"
        />
      </label>
      <label>
        Vendor Count
        <input
          type="number"
          value={config.vendorCount}
          onChange={handleChange("vendorCount")}
          placeholder="Number of vendors"
        />
      </label>
      <button type="submit">Save Configuration</button>
    </form>
  );
};

export default ConfigurationForm;
