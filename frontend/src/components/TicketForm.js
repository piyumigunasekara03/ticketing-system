import React, { useState } from 'react';

const TicketForm = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof onCreate !== 'function') {
      console.error("onCreate is not a function");
      return;
    }

    // Call the onCreate function with the ticket data
    onCreate({ title, description });

    // Clear the form fields
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Create Ticket</button>
    </form>
  );
};

export default TicketForm;

