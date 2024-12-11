package org.example;

import java.util.logging.Logger;

public class Customer implements Runnable {
    private final TicketPool ticketPool;
    private final int retrievalRate;
    private volatile boolean running = true;
    private static final Logger logger = LoggerConfig.getLogger();

    public Customer(TicketPool ticketPool, int retrievalRate) {
        this.ticketPool = ticketPool;
        this.retrievalRate = retrievalRate;
    }

    @Override
    public void run() {
        logger.info(Thread.currentThread().getName() + " started.");
        while (running) {
            ticketPool.buyTicket();
            try {
                Thread.sleep(retrievalRate);
            } catch (InterruptedException e) {
                System.out.println(Thread.currentThread().getName() + " was interrupted.");
                logger.warning(Thread.currentThread().getName() + " was interrupted.");
                break; // Exit the loop if interrupted
            }
        }
        System.out.println(Thread.currentThread().getName() + " has stopped.");
        logger.info(Thread.currentThread().getName() + " has stopped.");
    }

    public void stop() {
        running = false;
    }
}
