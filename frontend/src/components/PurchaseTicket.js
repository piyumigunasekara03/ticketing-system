import React, { useState } from "react";
import axios from "axios";
import Notification from "./Notification";

const PurchaseTicket = ({ onPurchase }) => {
    const [ticketId, setTicketId] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // 'success' or 'error'
    const [loading, setLoading] = useState(false);

    const purchaseTicket = async () => {
        if (!ticketId || parseInt(ticketId) <= 0) {
            setMessage("Please enter a valid Ticket ID.");
            setMessageType("error");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:3000/purchase", { id: parseInt(ticketId) });
            setMessage(response.data.message);
            setMessageType("success");
            onPurchase(); // Refresh the ticket list
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setMessage("Ticket not found. Please enter a valid Ticket ID.");
            } else if (error.response && error.response.status === 400) {
                setMessage(error.response.data.message);
            } else {
                setMessage("Failed to purchase ticket. Try again.");
            }
            setMessageType("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Purchase a Ticket</h2>
            <Notification message={message} type={messageType} />
            <input
                type="number"
                placeholder="Enter Ticket ID"
                value={ticketId}
                onChange={e => setTicketId(e.target.value)}
                disabled={loading}
            />
            <button onClick={purchaseTicket} disabled={loading}>
                {loading ? "Processing..." : "Purchase"}
            </button>
        </div>
    );
};

export default PurchaseTicket;

