public class Customer implements Runnable {
    private final int customerId;
    private final long retrievalInterval;
    private final TicketPool ticketPool;

    public Customer(int customerId, long retrievalInterval, TicketPool ticketPool) {
        this.customerId = customerId;
        this.retrievalInterval = retrievalInterval;
        this.ticketPool = ticketPool;
    }

    @Override
    public void run() {
        try {
            while (true) {
                if (!Main.isRunning()) break;

                boolean ticket = ticketPool.removeTicket();
                if (ticket) {
                    System.out.println("Customer " + customerId + " purchased a ticket.");
                } else {
                    System.out.println("Customer " + customerId + " found no tickets available.");
                }

                Thread.sleep(retrievalInterval);
            }
        } catch (InterruptedException e) {
            System.out.println("Customer " + customerId + " interrupted.");
        }
        System.out.println("Customer " + customerId + " stopped.");
    }
}
