package org.example;

import java.util.Scanner;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.logging.Logger;
public class Configuration {
    private static final Logger logger = Logger.getLogger(Configuration.class.getName());
    private int totalTickets;

    public void setTotalTickets(int totalTickets) {
        this.totalTickets = totalTickets;
    }

    public void setCustomerRetrievalRate(int customerRetrievalRate) {
        this.customerRetrievalRate = customerRetrievalRate;
    }

    public void setTicketReleaseRate(int ticketReleaseRate) {
        this.ticketReleaseRate = ticketReleaseRate;
    }

    private int customerRetrievalRate;
    private int ticketReleaseRate;

    // Constructor to initialize configuration
    public Configuration(int totalTickets, int customerRetrievalRate, int ticketReleaseRate) {
        this.totalTickets = totalTickets;
        this.customerRetrievalRate = customerRetrievalRate;
        this.ticketReleaseRate = ticketReleaseRate;
    }

    // Load configuration from user input
    public static Configuration loadConfiguration() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the total number of tickets: ");
        int totalTickets = Integer.parseInt(scanner.nextLine());

        System.out.print("Enter the customer ticket retrieval rate (in seconds): ");
        int customerRetrievalRate = Integer.parseInt(scanner.nextLine());

        System.out.print("Enter the vendor ticket release rate (in seconds): ");
        int ticketReleaseRate = Integer.parseInt(scanner.nextLine());

        return new Configuration(totalTickets, customerRetrievalRate, ticketReleaseRate);
    }

    public int getTotalTickets() {
        return totalTickets;
    }

    public int getCustomerRetrievalRate() {
        return customerRetrievalRate;
    }

    public int getTicketReleaseRate() {
        return ticketReleaseRate;
    }

    // Save configuration to JSON
    public void saveToFile(String fileName) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        try (FileWriter writer = new FileWriter(fileName)) {
            gson.toJson(this, writer);
            System.out.println("Configuration saved to file: " + fileName);
        } catch (IOException e) {
            System.err.println("Error saving configuration: " + e.getMessage());
        }
    }

    // Load configuration from JSON
    public static Configuration loadFromFile(String fileName) {
        Gson gson = new Gson();
        try (FileReader reader = new FileReader(fileName)) {
            return gson.fromJson(reader, Configuration.class);
        } catch (IOException e) {
            System.err.println("Error loading configuration: " + e.getMessage());
        }
        return null;
    }
}



