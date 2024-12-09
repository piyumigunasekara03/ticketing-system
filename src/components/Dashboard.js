import React, { useState } from "react";

const Dashboard = () => {
  const [config, setConfig] = useState({
    totalTickets: "",
    releaseRate: "",
    retrievalRate: "",
    vendorCount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="dashboard">
      <div className="stats">
        <div>
          <label>Total Tickets</label>
          <input
            type="number"
            name="totalTickets"
            placeholder="Max ticket capacity"
            value={config.totalTickets}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ticket Release Rate</label>
          <input
            type="number"
            name="releaseRate"
            placeholder="Tickets/minute"
            value={config.releaseRate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Retrieval Rate</label>
          <input
            type="number"
            name="retrievalRate"
            placeholder="Customers/minute"
            value={config.retrievalRate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Vendor Count</label>
          <input
            type="number"
            name="vendorCount"
            placeholder="Number of vendors"
            value={config.vendorCount}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
