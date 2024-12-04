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

// Fetch all available tickets
app.get('/tickets', (req, res) => {
    const availableTickets = tickets.filter(ticket => ticket.status === "available");
    res.json(availableTickets);
});

// Purchase a ticket
app.post('/purchase', (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: "Ticket ID is required" });
    }

    const ticket = tickets.find(ticket => ticket.id === id);

    if (!ticket) {
        return res.status(404).json({ message: "Ticket not found" });
    }

    if (ticket.status === "sold") {
        return res.status(400).json({ message: "Ticket is already sold" });
    }

    ticket.status = "sold";
    res.json({ message: "Ticket purchased successfully", ticket });
});

// Check the status of a specific ticket
app.get('/status/:id', (req, res) => {
    const { id } = req.params;

    const ticket = tickets.find(ticket => ticket.id == id);

    if (!ticket) {
        return res.status(404).json({ message: "Ticket not found" });
    }

    res.json({ id: ticket.id, status: ticket.status });
});

// Create a new ticket
app.post('/tickets', (req, res) => {
    const { price } = req.body;

    if (!price || isNaN(price)) {
        return res.status(400).json({ message: "Valid ticket price is required" });
    }

    const newTicket = {
        id: tickets.length + 1,
        status: "available",
        price: parseFloat(price),
    };

    tickets.push(newTicket);
    res.status(201).json({ message: "Ticket created successfully", ticket: newTicket });
});

// Delete a ticket by ID
app.delete('/tickets/:id', (req, res) => {
    const { id } = req.params;

    const ticketIndex = tickets.findIndex(ticket => ticket.id == id);

    if (ticketIndex === -1) {
        return res.status(404).json({ message: "Ticket not found" });
    }

    tickets.splice(ticketIndex, 1);
    res.json({ message: `Ticket with ID ${id} deleted successfully` });
});

// Root endpoint
app.get('/', (req, res) => {
    res.send("Welcome to the Ticketing System API");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server is running at http://localhost:${PORT}`);
});
