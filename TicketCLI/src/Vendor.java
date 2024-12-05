public class Vendor implements Runnable {
    private final int vendorId;
    private final int ticketsPerRelease;
    private final long releaseInterval;
    private final TicketPool ticketPool;

    public Vendor(int vendorId, int ticketsPerRelease, long releaseInterval, TicketPool ticketPool) {
        this.vendorId = vendorId;
        this.ticketsPerRelease = ticketsPerRelease;
        this.releaseInterval = releaseInterval;
        this.ticketPool = ticketPool;
    }

    @Override
    public void run() {
        try {
            while (true) {
                if (!Main.isRunning()) break;

                ticketPool.addTickets(ticketsPerRelease);
                System.out.println("Vendor " + vendorId + " released " + ticketsPerRelease + " tickets.");

                Thread.sleep(releaseInterval);
            }
        } catch (InterruptedException e) {
            System.out.println("Vendor " + vendorId + " interrupted.");
        }
        System.out.println("Vendor " + vendorId + " stopped.");
    }
}
