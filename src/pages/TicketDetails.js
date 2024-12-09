import React from "react";
import { useParams } from "react-router-dom";

const TicketDetails = () => {
  const { id } = useParams(); // Get the ticket ID from the URL

  return (
    <div className="ticket-details">
      <h1>Ticket Details - {id}</h1>
      {/* You can fetch and display ticket details here based on the ID */}
      <p>Details of ticket {id} will be shown here.</p>
    </div>
  );
};

export default TicketDetails;
