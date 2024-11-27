import java.util.Scanner;

public class CLIHelper {

    // Display the main menu
    public static void displayMenu() {
        System.out.println("\nMenu:");
        System.out.println("1. View Available Tickets");
        System.out.println("2. Purchase a Ticket");
        System.out.println("3. Check Ticket Status");
        System.out.println("4. Refresh Ticket List");
        System.out.println("5. Search Tickets");
        System.out.println("6. Exit");
        System.out.print("Enter your choice: ");
    }

    // Get integer input from the user
    public static int getIntInput(String prompt) {
        Scanner scanner = new Scanner(System.in);
        System.out.print(prompt);
        while (!scanner.hasNextInt()) {
            System.out.println("Invalid input. Please enter a number.");
            scanner.next(); // consume the invalid input
        }
        return scanner.nextInt();
    }

    // Get double input from the user (for price range)
    public static double getDoubleInput(String prompt) {
        Scanner scanner = new Scanner(System.in);
        System.out.print(prompt);
        while (!scanner.hasNextDouble()) {
            System.out.println("Invalid input. Please enter a valid number.");
            scanner.next(); // consume the invalid input
        }
        return scanner.nextDouble();
    }
}
