import java.util.LinkedList;
import java.util.Queue;

public class TicketPool {
    private final Queue<String> tickets;
    private final int maxCapacity;

    public TicketPool(int maxCapacity) {
        this.tickets = new LinkedList<>();
        this.maxCapacity = maxCapacity;
    }

    public synchronized void addTickets(int count) {
        while (tickets.size() + count > maxCapacity) {
            try {
                wait();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        for (int i = 0; i < count; i++) {
            tickets.add("Ticket-" + (tickets.size() + 1));
        }
        notifyAll();
    }

    public synchronized boolean removeTicket() {
        while (tickets.isEmpty()) {
            try {
                wait();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return false;
            }
        }
        tickets.poll();
        notifyAll();
        return true;
    }
}
