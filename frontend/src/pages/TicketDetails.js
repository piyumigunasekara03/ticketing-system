import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory

const TicketDetails = () => {
  const [ticket, setTicket] = useState(null);
  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    // Fetch ticket details logic here
  }, []);

  const handleGoBack = () => {
    navigate('/dashboard');  // Use navigate instead of history.push
  };

  return (
    <div>
      <h2>Ticket Details</h2>
      <button onClick={handleGoBack}>Go Back</button>
      {/* Display ticket details here */}
    </div>
  );
};

export default TicketDetails;
