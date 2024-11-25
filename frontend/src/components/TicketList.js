import React, { useEffect, useState } from "react";
import axios from "axios";

const TicketList = () => {
    const [tickets, setTickets] = useState([]);

    // Fetch available tickets
    const fetchTickets = async () => {
        try {
            const response = await axios.get("http://localhost:3000/tickets");
            setTickets(response.data);
        } catch (error) {
            console.error("Error fetching tickets:", error);
        }
    };

    useEffect(() => {
        fetchTickets();
    }, []);

    return (
        <div>
            <h2>Available Tickets</h2>
            <ul>
                {tickets.length > 0 ? (
                    tickets.map(ticket => (
                        <li key={ticket.id}>
                            Ticket ID: {ticket.id}, Price: ${ticket.price}
                        </li>
                    ))
                ) : (
                    <p>No available tickets.</p>
                )}
            </ul>
        </div>
    );
};

export default TicketList;
