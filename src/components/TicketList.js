const TicketList = ({ tickets = [] }) => {
  if (!Array.isArray(tickets)) {
    console.error("Invalid tickets prop passed to TicketList");
    return null;
  }

  return (
    <div className="ticket-list">
      <h2>Tickets</h2>
      {tickets.length === 0 ? (
        <p>No tickets available.</p>
      ) : (
        <ul>
          {tickets.map((ticket, index) => (
            <li key={index}>
              <h3>{ticket.title}</h3>
              <p>{ticket.description}</p>
              <p>Price: {ticket.price}</p>
              <p>Date: {ticket.date}</p>
              <p>Buyer: {ticket.buyer}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TicketList;
