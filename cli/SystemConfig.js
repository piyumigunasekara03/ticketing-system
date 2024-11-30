const readline = require('readline');

// Create readline interface for CLI input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Configuration object to hold user inputs
let config = {
    totalTickets: 0,
    ticketReleaseRate: 0,
    customerRetrievalRate: 0,
    maxTicketCapacity: 0
};

// Helper function to prompt for input
const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
};

// Function to validate and collect inputs
const collectConfig = async () => {
    try {
        // Collect Total Tickets
        const totalTickets = await askQuestion("Enter the Total Number of Tickets: ");
        if (isNaN(totalTickets) || totalTickets <= 0) throw new Error("Total Tickets must be a positive number.");
        config.totalTickets = parseInt(totalTickets, 10);

        // Collect Ticket Release Rate
        const ticketReleaseRate = await askQuestion("Enter the Ticket Release Rate: ");
        if (isNaN(ticketReleaseRate) || ticketReleaseRate <= 0) throw new Error("Ticket Release Rate must be a positive number.");
        config.ticketReleaseRate = parseInt(ticketReleaseRate, 10);

        // Collect Customer Retrieval Rate
        const customerRetrievalRate = await askQuestion("Enter the Customer Retrieval Rate: ");
        if (isNaN(customerRetrievalRate) || customerRetrievalRate <= 0) throw new Error("Customer Retrieval Rate must be a positive number.");
        config.customerRetrievalRate = parseInt(customerRetrievalRate, 10);

        // Collect Maximum Ticket Capacity
        const maxTicketCapacity = await askQuestion("Enter the Maximum Ticket Capacity: ");
        if (isNaN(maxTicketCapacity) || maxTicketCapacity <= 0) throw new Error("Maximum Ticket Capacity must be a positive number.");
        config.maxTicketCapacity = parseInt(maxTicketCapacity, 10);

        console.log("\nSystem Configuration Completed Successfully:");
        console.log(config);

    } catch (error) { 
        console.error(`\nError: ${error.message}`);
        console.log("Restarting configuration...\n");
        await collectConfig(); // Restart the configuration process
    }
};

// Function to initialize tickets
const initializeTickets = () => {
    const tickets = Array.from({ length: config.totalTickets }, (_, i) => ({
        id: i + 1,
        status: "available",
        price: Math.floor(Math.random() * 200 + 50) // Random price between 50 and 250
    }));

    console.log("\nTickets Initialized:");
    console.log(tickets);

    // Return the tickets array for further use
    return tickets;
};

// Start the configuration process
const initializeSystem = async () => {
    console.log("Welcome to the Ticketing System Configuration\n");
    await collectConfig();

    rl.close(); // Close the CLI interface

    console.log("\nSystem is initializing with the following configuration:");
    console.log(config);

    // Initialize tickets
    const tickets = initializeTickets();

    // Example: Start server or system with initialized tickets
    startSystem(tickets);
};

// Mock function to represent starting the system
const startSystem = (tickets) => {
    console.log(`\nSystem started with ${tickets.length} tickets.`);
    // Pass `tickets` to your backend logic or server
    // Example: Attach this to your Express app, or use in your CLI workflow
};

// Run the initialization 
initializeSystem();
