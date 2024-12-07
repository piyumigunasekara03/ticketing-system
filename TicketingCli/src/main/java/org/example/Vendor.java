package org.example;

public class Vendor implements Runnable {
    private final TicketPool ticketPool;
    private final int releaseRate;
    private volatile boolean running = true;

    public Vendor(TicketPool ticketPool, int releaseRate) {
        this.ticketPool = ticketPool;
        this.releaseRate = releaseRate;
    }

    @Override
    public void run() {
        while (running) {
            ticketPool.addTicket();
            try {
                Thread.sleep(releaseRate);
            } catch (InterruptedException e) {
                System.out.println(Thread.currentThread().getName() + " was interrupted.");
                break; // Exit the loop if interrupted
            }
        }
        System.out.println(Thread.currentThread().getName() + " has stopped.");
    }

    public void stop() {
        running = false;
    }
}
