package org.example;

public class Customer implements Runnable {
    private final TicketPool ticketPool;
    private final int retrievalRate;
    private volatile boolean running = true;

    public Customer(TicketPool ticketPool, int retrievalRate) {
        this.ticketPool = ticketPool;
        this.retrievalRate = retrievalRate;
    }

    @Override
    public void run() {
        while (running) {
            ticketPool.buyTicket();
            try {
                Thread.sleep(retrievalRate);
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
