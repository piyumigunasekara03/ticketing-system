package org.example;

import java.util.Scanner;

public class Main {
    private static TicketPool ticketPool;
    private static Thread[] customerThreads;
    private static Thread[] vendorThreads;
    private static Customer[] customers;
    private static Vendor[] vendors;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Load configuration
        Configuration config = Configuration.loadConfiguration();
        ticketPool = new TicketPool(config.getTotalTickets());

        // Start or stop simulation based on user input
        while (true) {
            System.out.print("Enter 'start' to begin simulation, or press Enter to stop: ");
            String input = scanner.nextLine();  // Wait for user input

            if (input.equals("start")) {
                startSimulation(config);
            } else if (input.isEmpty()) {
                stopSimulation();
                break;  // Exit the loop and end the simulation
            } else {
                System.out.println("Invalid input. Please enter 'start' to begin the simulation or press Enter to stop.");
            }
        }

        scanner.close();
    }

    private static void startSimulation(Configuration config) {
        // Create customer and vendor arrays
        customers = new Customer[5];  // Example: 5 customers
        vendors = new Vendor[3];   // Example: 3 vendors
        customerThreads = new Thread[5];
        vendorThreads = new Thread[3];

        // Create and start customer threads
        for (int i = 0; i < customerThreads.length; i++) {
            customers[i] = new Customer(ticketPool, config.getCustomerRetrievalRate());
            customerThreads[i] = new Thread(customers[i], "Customer-" + (i + 1));
            customerThreads[i].start();
        }

        // Create and start vendor threads
        for (int i = 0; i < vendorThreads.length; i++) {
            vendors[i] = new Vendor(ticketPool, config.getTicketReleaseRate());
            vendorThreads[i] = new Thread(vendors[i], "Vendor-" + (i + 1));
            vendorThreads[i].start();
        }
    }

    private static void stopSimulation() {
        // Stop all customer and vendor threads
        System.out.println("Stopping simulation...");

        // Stop customer threads
        for (Customer customer : customers) {
            if (customer != null) {
                customer.stop();
            }
        }

        // Stop vendor threads
        for (Vendor vendor : vendors) {
            if (vendor != null) {
                vendor.stop();
            }
        }

        // Wait for all threads to finish (join)
        try {
            for (Thread t : customerThreads) {
                if (t != null) {
                    t.join();
                }
            }
            for (Thread t : vendorThreads) {
                if (t != null) {
                    t.join();
                }
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Simulation has stopped.");
    }
}
