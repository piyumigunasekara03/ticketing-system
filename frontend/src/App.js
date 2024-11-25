import React from "react";
import TicketList from "./components/TicketList";
import PurchaseTicket from "./components/PurchaseTicket";
import CheckTicketStatus from "./components/CheckTicketStatus";
import "./App.css"; // Import the styles

function App() {
    // Function to refresh the ticket list after a purchase
    const refreshTickets = () => {
        window.location.reload(); // Simplistic way to refresh; can be optimized
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Ticketing System</h1>

            {/* Component to display all available tickets */}
            <TicketList />

            {/* Component to handle ticket purchase */}
            <PurchaseTicket onPurchase={refreshTickets} />

            {/* Component to check the status of a ticket */}
            <CheckTicketStatus />
        </div>
    );
}

export default App;

