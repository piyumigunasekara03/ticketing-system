import React, { useState } from "react";
import axios from "axios";

const CheckTicketStatus = () => {
    const [ticketId, setTicketId] = useState("");
    const [status, setStatus] = useState("");

    const checkStatus = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/status/${ticketId}`);
            setStatus(`Ticket ID: ${response.data.id}, Status: ${response.data.status}`);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setStatus("Ticket not found.");
            } else {
                setStatus("Failed to fetch ticket status.");
            }
        }
    };

    return (
        <div>
            <h2>Check Ticket Status</h2>
            <input
                type="number"
                placeholder="Enter Ticket ID"
                value={ticketId}
                onChange={e => setTicketId(e.target.value)}
            />
            <button onClick={checkStatus}>Check Status</button>
            {status && <p>{status}</p>}
        </div>
    );
};

export default CheckTicketStatus;

