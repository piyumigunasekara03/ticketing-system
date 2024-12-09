import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation

const TicketForm = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [buyer, setBuyer] = useState('');
  const [ticketCreated, setTicketCreated] = useState(false); // State to track ticket creation success
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create ticket object with all fields
    const ticket = { title, description, price, date, buyer };

    if (typeof onCreate === 'function') {
      // Call the onCreate function with the ticket data
      onCreate(ticket);

      // Mark ticket as created
      setTicketCreated(true);

      // Clear the form fields
      setTitle('');
      setDescription('');
      setPrice('');
      setDate('');
      setBuyer('');
    } else {
      console.error('onCreate is not a function or is undefined.');
    }
  };

  // Function to handle redirect to ticket list
  const redirectToTicketList = () => {
    navigate('/ticket-list'); // Navigate to the ticket list page
  };

  return (
    <div className="ticket-form">
      <h1>Create a Ticket</h1>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            id="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="buyer" className="form-label">Buyer's Name</label>
          <input
            type="text"
            id="buyer"
            className="form-control"
            value={buyer}
            onChange={(e) => setBuyer(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Ticket</button>
      </form>

      {/* Show success message after ticket is created */}
      {ticketCreated && (
        <div className="alert alert-success mt-3">
          <strong>Ticket Created!</strong> Your ticket has been successfully created.
        </div>
      )}

      {/* Show button to navigate to ticket list page */}
      {ticketCreated && (
        <button className="btn btn-success mt-3" onClick={redirectToTicketList}>
          Go to Ticket List
        </button>
      )}
    </div>
  );
};

export default TicketForm;
