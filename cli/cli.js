const Configuration = require('./Configuration');
const readline = require('readline');

// File to store configuration
const CONFIG_FILE = 'config.json';

// Load existing configuration or create defaults
let config = Configuration.load(CONFIG_FILE);

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
const ask = (question) => new Promise((resolve) => rl.question(question, resolve));

// Update configuration
const updateConfiguration = async () => {
    console.log("\n--- Update Configuration ---");
    config.totalTickets = parseInt(await ask("Total Tickets (current: " + config.totalTickets + "): ") || config.totalTickets);
    config.ticketReleaseRate = parseInt(await ask("Ticket Release Rate (current: " + config.ticketReleaseRate + "): ") || config.ticketReleaseRate);
    config.customerRetrievalRate = parseInt(await ask("Customer Retrieval Rate (current: " + config.customerRetrievalRate + "): ") || config.customerRetrievalRate);
    config.maxTicketCapacity = parseInt(await ask("Max Ticket Capacity (current: " + config.maxTicketCapacity + "): ") || config.maxTicketCapacity);

    // Save updated configuration
    config.save(CONFIG_FILE);
    rl.close();

    console.log("\nUpdated Configuration:");
    console.log(config);
};

// Display configuration and ask to update
console.log("\nCurrent Configuration:");
console.log(config);

ask("\nWould you like to update the configuration? (yes/no): ").then((response) => {
    if (response.toLowerCase() === 'yes') {
        updateConfiguration();
    } else {
        console.log("\nExiting without changes.");
        rl.close();
    }
});