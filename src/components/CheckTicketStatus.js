import React, { useState } from "react";
import axios from "axios";
import Notification from "./Notification";
import InputField from "./InputField";

const CheckTicketStatus = () => {
    const [ticketId, setTicketId] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // 'success' or 'error'
    const [loading, setLoading] = useState(false);

    const checkStatus = async () => {
        if (!ticketId || parseInt(ticketId) <= 0) {
            setStatusMessage("Please enter a valid Ticket ID.");
            setMessageType("error");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:3000/status/${ticketId}`);
            setStatusMessage(`Ticket ID: ${response.data.id}, Status: ${response.data.status}`);
            setMessageType("success");
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setStatusMessage("Ticket not found.");
            } else {
                setStatusMessage("Failed to fetch ticket status.");
            }
            setMessageType("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Check Ticket Status</h2>
            <Notification message={statusMessage} type={messageType} />
            <InputField
                value={ticketId}
                onChange={(e) => setTicketId(e.target.value)}
                placeholder="Enter Ticket ID"
                disabled={loading}
            />
            <button onClick={checkStatus} disabled={loading}>
                {loading ? "Checking..." : "Check Status"}
            </button>
        </div>
    );
};

export default CheckTicketStatus;
