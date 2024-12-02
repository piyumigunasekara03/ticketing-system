const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt for input and validate it
const askQuestion = (question, validate) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            // Validate input
            const error = validate(answer);
            if (error) {
                console.log(`\n[Error] ${error}\n`);
                resolve(askQuestion(question, validate)); // Reprompt if invalid
            } else {
                resolve(answer); // Return valid input
            }
        });
    });
};

// Function to collect and validate all inputs
const collectInputs = async () => {
    // Prompt for Total Tickets
    const totalTickets = await askQuestion(
        "Enter the Total Number of Tickets: ",
        (input) => {
            if (isNaN(input) || input <= 0) return "Total Tickets must be a positive number.";
        }
    );

    // Prompt for Ticket Release Rate
    const ticketReleaseRate = await askQuestion(
        "Enter the Ticket Release Rate: ",
        (input) => {
            if (isNaN(input) || input <= 0) return "Ticket Release Rate must be a positive number.";
        }
    );

    // Prompt for Customer Retrieval Rate
    const customerRetrievalRate = await askQuestion(
        "Enter the Customer Retrieval Rate: ",
        (input) => {
            if (isNaN(input) || input <= 0) return "Customer Retrieval Rate must be a positive number.";
        }
    );

    // Prompt for Maximum Ticket Capacity
    const maxTicketCapacity = await askQuestion(
        "Enter the Maximum Ticket Capacity: ",
        (input) => {
            if (isNaN(input) || input <= 0) return "Maximum Ticket Capacity must be a positive number.";
        }
    );

    // Return all validated inputs as an object
    return {
        totalTickets: parseInt(totalTickets, 10),
        ticketReleaseRate: parseInt(ticketReleaseRate, 10),
        customerRetrievalRate: parseInt(customerRetrievalRate, 10),
        maxTicketCapacity: parseInt(maxTicketCapacity, 10)
    };
};

// Main function to initialize the CLI
const initializeSystem = async () => {
    console.log("Welcome to the Ticketing System Configuration\n");

    // Collect all inputs
    const config = await collectInputs();

    // Close the readline interface
    rl.close();

    // Print the collected configuration
    console.log("\nSystem Configuration Completed Successfully:");
    console.log(config);

    // Example: Pass configuration to your system initialization logic
    startSystem(config);
};

// Mock function to represent starting the system
const startSystem = (config) => {
    console.log(`\nStarting system with the following configuration:`);
    console.log(`Total Tickets: ${config.totalTickets}`);
    console.log(`Ticket Release Rate: ${config.ticketReleaseRate}`);
    console.log(`Customer Retrieval Rate: ${config.customerRetrievalRate}`);
    console.log(`Maximum Ticket Capacity: ${config.maxTicketCapacity}`);
};

// Run the CLI
initializeSystem();

