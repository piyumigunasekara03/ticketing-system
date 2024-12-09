import React from "react";

function TicketCard({ ticket }) {
  if (!ticket) {
    return <div className="ticket-card">No ticket data available.</div>;
  }

  return (
    <div className="ticket-card">
      <h3>{ticket.title || "Untitled Ticket"}</h3>
      <p>{ticket.description || "No description provided."}</p>
      <p><strong>Price:</strong> ${ticket.price}</p> {/* Display price */}
      <p><strong>Date:</strong> {ticket.date}</p> {/* Display date */}
      <p><strong>Buyer:</strong> {ticket.buyer}</p> {/* Display buyer */}
    </div>
  );
}

export default TicketCard;
