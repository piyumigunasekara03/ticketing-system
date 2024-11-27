import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

public class TicketingCLI {
    private static final String BASE_URL = "http://localhost:8080"; // Replace with your backend URL

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int choice;

        System.out.println("Welcome to the Ticketing System CLI");
        do {
            System.out.println("\nMenu:");
            System.out.println("1. View Available Tickets");
            System.out.println("2. Purchase a Ticket");
            System.out.println("3. Check Ticket Status");
            System.out.println("4. Refresh Ticket List");
            System.out.println("5. Search Tickets");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    fetchAvailableTickets();
                    break;
                case 2:
                    System.out.print("Enter Ticket ID to purchase: ");
                    int ticketId = scanner.nextInt();
                    purchaseTicket(ticketId);
                    break;
                case 3:
                    System.out.print("Enter Ticket ID to check status: ");
                    int statusId = scanner.nextInt();
                    checkTicketStatus(statusId);
                    break;
                case 4:
                    refreshTicketList();
                    break;
                case 5:
                    searchTicketsByPrice();
                    break;
                case 6:
                    System.out.println("Exiting... Thank you!");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 6);

        scanner.close();
    }

    // Fetch available tickets
    private static void fetchAvailableTickets() {
        System.out.println("\nFetching available tickets...");
        try {
            URL url = new URL(BASE_URL + "/tickets");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();
            if (responseCode == 200) {
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                System.out.println("Available Tickets:");
                System.out.println(response.toString());
            } else {
                System.out.println("Failed to fetch tickets. Response code: " + responseCode);
            }
        } catch (Exception e) {
            System.out.println("An error occurred while fetching tickets: " + e.getMessage());
        }
    }

    // Purchase a ticket
    private static void purchaseTicket(int ticketId) {
        System.out.println("\nProcessing ticket purchase...");
        try {
            URL url = new URL(BASE_URL + "/purchase");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setDoOutput(true);

            String jsonInputString = String.format("{\"id\":%d}", ticketId);
            try (OutputStream os = connection.getOutputStream()) {
                byte[] input = jsonInputString.getBytes("utf-8");
                os.write(input, 0, input.length);
            }

            int responseCode = connection.getResponseCode();
            if (responseCode == 200) {
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                System.out.println("\nPurchase Successful:");
                System.out.println(response.toString());
            } else if (responseCode == 404) {
                System.out.println("Error: Ticket not found. Please enter a valid Ticket ID.");
            } else if (responseCode == 400) {
                System.out.println("Error: Ticket is already sold or invalid request.");
            } else {
                System.out.println("Failed to purchase ticket. Response code: " + responseCode);
            }
        } catch (Exception e) {
            System.out.println("An error occurred while purchasing the ticket: " + e.getMessage());
        }
    }

    // Check ticket status
    private static void checkTicketStatus(int ticketId) {
        System.out.println("\nChecking ticket status...");
        try {
            URL url = new URL(BASE_URL + "/status/" + ticketId);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();
            if (responseCode == 200) {
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                System.out.println("\nTicket Status:");
                System.out.println(response.toString());
            } else if (responseCode == 404) {
                System.out.println("Error: Ticket not found.");
            } else {
                System.out.println("Failed to fetch ticket status. Response code: " + responseCode);
            }
        } catch (Exception e) {
            System.out.println("An error occurred while checking ticket status: " + e.getMessage());
        }
    }

    // Refresh ticket list (same as fetching tickets)
    private static void refreshTicketList() {
        System.out.println("\nRefreshing ticket list...");
        fetchAvailableTickets();
    }

    // Search tickets by price range
    private static void searchTicketsByPrice() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter minimum price: ");
        while (!scanner.hasNextDouble()) {
            System.out.println("Please enter a valid number for minimum price.");
            scanner.next(); // consume the invalid input
        }
        double minPrice = scanner.nextDouble();
        System.out.print("Enter maximum price: ");
        while (!scanner.hasNextDouble()) {
            System.out.println("Please enter a valid number for maximum price.");
            scanner.next(); // consume the invalid input
        }
        double maxPrice = scanner.nextDouble();

        // Call backend API to search tickets based on price range
        try {
            URL url = new URL(BASE_URL + "/tickets/search?minPrice=" + minPrice + "&maxPrice=" + maxPrice);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();
            if (responseCode == 200) {
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                System.out.println("Found Tickets:");
                System.out.println(response.toString());
            } else {
                System.out.println("Failed to fetch tickets. Response code: " + responseCode);
            }
        } catch (Exception e) {
            System.out.println("An error occurred while searching tickets: " + e.getMessage());
        }
    }
}
