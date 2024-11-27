public class Ticket {
    private int id;
    private String status;
    private double price;

    // Constructor
    public Ticket(int id, String status, double price) {
        this.id = id;
        this.status = status;
        this.price = price;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Ticket ID: " + id + ", Status: " + status + ", Price: $" + price;
    }
}
