const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory ticket storage
let tickets = [
    { id: 1, status: "available", price: 100 },
    { id: 2, status: "available", price: 150 },
    { id: 3, status: "sold", price: 200 },
];

// Endpoint: Fetch all available tickets
app.get('/tickets', (req, res) => {
    const availableTickets = tickets.filter(ticket => ticket.status === "available");
    res.json(availableTickets);
});

// Endpoint: Purchase a ticket
app.post('/purchase', (req, res) => {
    const { id } = req.body;

    // Validate if `id` is provided
    if (!id) {
        return res.status(400).json({ message: "Ticket ID is required" });
    }

    // Find the ticket by ID
    const ticket = tickets.find(ticket => ticket.id === id);

    // Check if ticket exists
    if (!ticket) {
        return res.status(404).json({ message: "Ticket not found" });
    }

    // Check if the ticket is already sold
    if (ticket.status === "sold") {
        return res.status(400).json({ message: "Ticket is already sold" });
    }

    // Update the ticket's status to "sold"
    ticket.status = "sold";

    res.json({ message: "Ticket purchased successfully", ticket });
});

// Endpoint: Check the status of a specific ticket
app.get('/status/:id', (req, res) => {
    const { id } = req.params;

    // Find the ticket by ID
    const ticket = tickets.find(ticket => ticket.id == id); // Use `==` to compare string and number

    // Check if ticket exists
    if (!ticket) {
        return res.status(404).json({ message: "Ticket not found" });
    }

    res.json({ id: ticket.id, status: ticket.status });
});

// Root Endpoint: Basic welcome message
app.get('/', (req, res) => {
    res.send("Welcome to the Ticketing System API");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server is running at http://localhost:${PORT}`);
});

