Real-Time Ticketing System

Introduction

The Ticket Management System is a real-time application that simulates a ticketing process for customers and vendors. Customers purchase tickets while vendors replenish the ticket pool, all while respecting the system's maximum capacity constraints. The system demonstrates concurrency, logging, and thread-safe operations in a controlled environment.

Setup Instructions

Prerequisites

Ensure that the following tools and frameworks are installed on your system:

Node.js: Version 18.x or later

npm: Version 9.x or later (bundled with Node.js)

Java (Optional): If integrating with Java-based tools, version 11 or later

Text Editor or IDE: VS Code or any other preferred code editor

Git: For cloning the repository

A modern web browser (e.g., Google Chrome, Mozilla Firefox)

Installation

Clone the repository:

git clone https://github.com/piyumigunasekara03/ticketing-system.git
cd ticketing-system
Navigate to the backend folder and install dependencies:

cd backend
npm install
Navigate to the frontend folder and install dependencies:

cd ../frontend
npm install
Running the Application
Start the Backend: Navigate to the backend folder and start the server:

cd backend
node server.js
The backend server will start on http://localhost:3001.

Start the Frontend: Open a new terminal, navigate to the frontend folder, and start the development server:

cd frontend
npm start
The frontend application will start on http://localhost:3000.

Usage Instructions
Configuring the System
Access the application via your browser at http://localhost:3000.

Use the Configuration Form to input the following parameters:

Total Tickets: Maximum ticket capacity for the event.
Ticket Release Rate: Number of tickets released per minute.
Customer Retrieval Rate: Number of customers retrieving tickets per minute.
Vendor Count: Total number of vendors in the system.
Click outside the form or navigate away to save your configuration.

Starting and Stopping the Simulation
Start Simulation: Click the "Start Simulation" button to begin the ticketing process. The system will log real-time updates in the System Logs section.
Stop Simulation: Click the "Stop Simulation" button to pause the simulation.
UI Explanation
Configuration Form: Located on the left side of the UI, it allows you to define system parameters.
Controls:
"Start Simulation" button starts the real-time ticketing process.
"Stop Simulation" button halts the simulation.
System Logs: Displays real-time updates, including configuration changes and simulation events.

Support
For any issues, please open a new issue on the GitHub repository or contact the developer.

