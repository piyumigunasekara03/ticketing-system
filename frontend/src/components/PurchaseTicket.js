import React, { useState } from "react";
import axios from "axios";

const PurchaseTicket = ({ onPurchase }) => {
    const [ticketId, setTicketId] = useState("");
    const [message, setMessage] = useState("");

    const purchaseTicket = async () => {
        try {
            const response = await axios.post("http://localhost:3000/purchase", { id: parseInt(ticketId) });
            setMessage(response.data.message);
            onPurchase(); // Refresh the ticket list
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setMessage("Ticket not found. Please enter a valid Ticket ID.");
            } else if (error.response && error.response.status === 400) {
                setMessage(error.response.data.message);
            } else {
                setMessage("Failed to purchase ticket. Try again.");
            }
        }
    };

    return (
        <div>
            <h2>Purchase a Ticket</h2>
            <input
                type="number"
                placeholder="Enter Ticket ID"
                value={ticketId}
                onChange={e => setTicketId(e.target.value)}
            />
            <button onClick={purchaseTicket}>Purchase</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default PurchaseTicket;
