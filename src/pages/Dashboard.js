import React, { useState } from "react";
import { Link } from "react-router-dom";
import TicketForm from "../components/TicketForm";  // Adjust the path as necessary
import TicketList from "../components/TicketList";  // Adjust the path as necessary

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [showTicketForm, setShowTicketForm] = useState(false); // State to control ticket form visibility

  // Function to handle ticket creation
  const handleCreateTicket = (ticket) => {
    setTickets([...tickets, ticket]);
    setShowTicketForm(false); // Hide ticket form after submission
  };

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard!</h1>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Welcome"
        className="dashboard-image"
      />
      <p>
        Thank you for logging in. Explore our features and enjoy your experience!
      </p>

      {/* Button to toggle ticket form visibility */}
      {!showTicketForm ? (
        <button onClick={() => setShowTicketForm(true)}>Create New Ticket</button>
      ) : (
        <TicketForm onCreate={handleCreateTicket} />
      )}

      {/* Display the created tickets */}
      {tickets.length > 0 && <TicketList tickets={tickets} />}
    </div>
  );
};

export default Dashboard;
