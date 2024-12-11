package org.example;

import java.util.logging.Logger;

import java.util.logging.Logger;
public class Vendor implements Runnable {
    private final TicketPool ticketPool;
    private final int releaseRate;
    private volatile boolean running = true;
    private static final Logger logger = LoggerConfig.getLogger();

    public Vendor(TicketPool ticketPool, int releaseRate) {
        this.ticketPool = ticketPool;
        this.releaseRate = releaseRate;
    }

    @Override
    public void run() {
        logger.info(Thread.currentThread().getName() + " started.");
        while (running) {
            ticketPool.addTicket();
            try {
                Thread.sleep(releaseRate);
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
