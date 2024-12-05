import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    private static volatile boolean running = true; // Shared flag to stop threads

    public static void main(String[] args) {
        String configFileName = "config.json";
        Configuration config = Configuration.loadConfig(configFileName);

        Scanner scanner = new Scanner(System.in);

        if (config == null) {
            System.out.println("No configuration file found. Would you like to create a new configuration? (yes/no)");
            String response = scanner.nextLine();
            if (response.equalsIgnoreCase("yes")) {
                config = createNewConfiguration(scanner);
                config.saveConfig(configFileName);
                System.out.println("New configuration saved as " + configFileName);
            } else {
                System.out.println("Exiting application.");
                scanner.close();
                return;
            }
        } else {
            System.out.println("Configuration loaded from " + configFileName);
        }

        // Wait for user confirmation to start the system
        System.out.println("Press Enter to start the system...");
        scanner.nextLine();

        // Initialize shared ticket pool
        TicketPool ticketPool = new TicketPool(config.getMaxTicketCapacity());

        List<Thread> threads = new ArrayList<>();

        // Create and start vendor threads
        for (int i = 1; i <= config.getVendorCount(); i++) {
            Vendor vendor = new Vendor(i, config.getTicketsPerRelease(), config.getReleaseInterval(), ticketPool);
            Thread vendorThread = new Thread(vendor);
            threads.add(vendorThread);
            vendorThread.start();
        }

        // Create and start customer threads
        for (int i = 1; i <= config.getCustomerCount(); i++) {
            Customer customer = new Customer(i, config.getRetrievalInterval(), ticketPool);
            Thread customerThread = new Thread(customer);
            threads.add(customerThread);
            customerThread.start();
        }

        // Wait for user input to stop threads
        System.out.println("Press Enter to stop...");
        scanner.nextLine();
        running = false; // Signal threads to stop

        // Join all threads
        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                System.out.println("Error while stopping threads: " + e.getMessage());
            }
        }

        scanner.close();
        System.out.println("Application stopped.");
    }

    private static Configuration createNewConfiguration(Scanner scanner) {
        Configuration config = new Configuration();

        System.out.println("Enter total number of tickets:");
        config.setTotalTickets(scanner.nextInt());

        System.out.println("Enter maximum ticket capacity:");
        config.setMaxTicketCapacity(scanner.nextInt());

        System.out.println("Enter number of vendors:");
        config.setVendorCount(scanner.nextInt());

        System.out.println("Enter number of customers:");
        config.setCustomerCount(scanner.nextInt());

        System.out.println("Enter tickets per release:");
        config.setTicketsPerRelease(scanner.nextInt());

        System.out.println("Enter release interval (in milliseconds):");
        config.setReleaseInterval(scanner.nextLong());

        System.out.println("Enter retrieval interval (in milliseconds):");
        config.setRetrievalInterval(scanner.nextLong());

        scanner.nextLine(); // Consume leftover newline character

        return config;
    }

    public static boolean isRunning() {
        return running;
    }
}
