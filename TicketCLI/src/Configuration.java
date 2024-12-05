import java.io.FileReader;
import java.io.FileWriter;
import com.google.gson.Gson;

public class Configuration {
    private int totalTickets;
    private int maxTicketCapacity;
    private int vendorCount;
    private int customerCount;
    private int ticketsPerRelease;
    private long releaseInterval;
    private long retrievalInterval;

    public static Configuration loadConfig(String fileName) {
        try (FileReader reader = new FileReader(fileName)) {
            return new Gson().fromJson(reader, Configuration.class);
        } catch (Exception e) {
            System.out.println("Error loading configuration: " + e.getMessage());
            return null;
        }
    }

    public void saveConfig(String fileName) {
        try (FileWriter writer = new FileWriter(fileName)) {
            new Gson().toJson(this, writer);
        } catch (Exception e) {
            System.out.println("Error saving configuration: " + e.getMessage());
        }
    }

    // Getters and Setters
    public int getTotalTickets() { return totalTickets; }
    public void setTotalTickets(int totalTickets) { this.totalTickets = totalTickets; }

    public int getMaxTicketCapacity() { return maxTicketCapacity; }
    public void setMaxTicketCapacity(int maxTicketCapacity) { this.maxTicketCapacity = maxTicketCapacity; }

    public int getVendorCount() { return vendorCount; }
    public void setVendorCount(int vendorCount) { this.vendorCount = vendorCount; }

    public int getCustomerCount() { return customerCount; }
    public void setCustomerCount(int customerCount) { this.customerCount = customerCount; }

    public int getTicketsPerRelease() { return ticketsPerRelease; }
    public void setTicketsPerRelease(int ticketsPerRelease) { this.ticketsPerRelease = ticketsPerRelease; }

    public long getReleaseInterval() { return releaseInterval; }
    public void setReleaseInterval(long releaseInterval) { this.releaseInterval = releaseInterval; }

    public long getRetrievalInterval() { return retrievalInterval; }
    public void setRetrievalInterval(long retrievalInterval) { this.retrievalInterval = retrievalInterval; }
}
