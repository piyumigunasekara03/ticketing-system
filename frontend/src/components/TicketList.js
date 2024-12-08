import React from 'react';

const TicketList = ({ tickets, onDelete }) => {
  return (
    <div className="ticket-list">
      {tickets.map((ticket, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{ticket.title}</h5>
            <p className="card-text">{ticket.description}</p>
            <button
              className="btn btn-danger"
              onClick={() => onDelete(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
