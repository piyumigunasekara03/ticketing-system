import React from "react";

const ConfigurationForm = ({ config, updateConfig }) => {
  const handleChange = (field) => (e) => {
    const value = e.target.value;
    updateConfig(field, value ? Math.max(0, Number(value)) : "");
  };

  return (
    <form className="configuration-form">
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
    </form>
  );
};

export default ConfigurationForm;

