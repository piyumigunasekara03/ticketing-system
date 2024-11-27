import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class TicketManager {
    private static final String BASE_URL = "http://localhost:8080"; // Replace with your backend URL

    // Fetch available tickets
    public static void fetchAvailableTickets() {
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
    public static void purchaseTicket(int ticketId) {
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
    public static void checkTicketStatus(int ticketId) {
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
