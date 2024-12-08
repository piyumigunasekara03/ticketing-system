// src/App.js
import React, { useState } from 'react';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

const App = () => {
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
      <h1 className="text-center my-4">Ticketing System</h1>

      <TicketForm onCreate={handleCreateTicket} />
      <TicketList tickets={tickets} onDelete={handleDeleteTicket} />
    </div>
  );
};

export default App;

