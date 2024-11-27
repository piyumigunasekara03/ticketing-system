import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <TicketContext.Provider value={{ tickets, loading, fetchTickets }}>
            {children}
        </TicketContext.Provider>
    );
};
