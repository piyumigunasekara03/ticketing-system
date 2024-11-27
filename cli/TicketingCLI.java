import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

public class TicketingCLI {
    private static final String BASE_URL = "http://localhost:8080"; // Replace with your backend URL

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\nMenu:");
            System.out.println("1. View Available Tickets");
            System.out.println("2. Purchase a Ticket");
            System.out.println("3. Check Ticket Status");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1 -> fetchAvailableTickets();
                case 2 -> {
                    System.out.print("Enter Ticket ID to purchase: ");
                    int ticketId = scanner.nextInt();
                    purchaseTicket(ticketId);
                }
                case 3 -> {
                    System.out.print("Enter Ticket ID to check status: ");
                    int ticketId = scanner.nextInt();
                    checkTicketStatus(ticketId);
                }
                case 4 -> {
                    System.out.println("Exiting... Thank you!");
                    return;
                }
                default -> System.out.println("Invalid choice. Please try again.");
            }
        }
    }

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

                System.out.println("\nAvailable Tickets:");
                System.out.println(response.toString());
            } else {
                System.out.println("Failed to fetch tickets. Response code: " + responseCode);
            }
        } catch (Exception e) {
            System.out.println("An error occurred while fetching tickets: " + e.getMessage());
        }
    }

    private static void purchaseTicket(int ticketId) {
        System.out.println("\nAttempting to purchase ticket...");
        try {
            URL url = new URL(BASE_URL + "/purchase/" + ticketId);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");

            int responseCode = connection.getResponseCode();
            if (responseCode == 200) {
                System.out.println("Ticket purchased successfully!");
            } else if (responseCode == 404) {
                System.out.println("Error: Ticket not found.");
            } else {
                System.out.println("Failed to purchase ticket. Response code: " + responseCode);
            }
        } catch (Exception e) {
            System.out.println("An error occurred while purchasing ticket: " + e.getMessage());
        }
    }

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
}

