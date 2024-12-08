// src/pages/Dashboard.js
import React, { useState } from 'react';
import TicketForm from '../components/TicketForm';
import TicketList from '../components/TicketList';

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  const handleCreateTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  const handleDeleteTicket = (index) => {
    const newTickets = tickets.filter((_, i) => i !== index);
    setTickets(newTickets);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Ticketing System - Dashboard</h1>

      <TicketForm onCreate={handleCreateTicket} />
      <TicketList tickets={tickets} onDelete={handleDeleteTicket} />
    </div>
  );
};

export default Dashboard;

