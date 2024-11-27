import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { TicketContext } from "../context/TicketContext";

const TicketList = () => {
    // const { tickets, loading } = useContext(TicketContext);
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch available tickets
    const fetchTickets = async () => {
        try {
            const response = await axios.get("http://localhost:3000/tickets");
            setTickets(response.data);
        } catch (error) {
            console.error("Error fetching tickets:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTickets();
    }, []);

    if (loading) {
        return <p>Loading tickets</p>
    }

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
