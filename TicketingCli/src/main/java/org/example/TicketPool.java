package org.example;

import java.util.logging.Logger;
public class TicketPool {
    private int totalTickets;
    private final int maxTicketCapacity;
    private static final Logger logger = LoggerConfig.getLogger();

    public TicketPool(int tickets, int maxTicketCapacity) {
        if (totalTickets > maxTicketCapacity) {
            throw new IllegalArgumentException("Initial tickets cannot exceed max ticket capacity.");
        }
        this.totalTickets = tickets;
        this.maxTicketCapacity = maxTicketCapacity;
    }

    public synchronized void buyTicket() {
        if (totalTickets > 0) {
            totalTickets--;
            String message = Thread.currentThread().getName() + " bought a ticket. Tickets remaining: " + totalTickets;
            System.out.println(message);
            logger.info(message);
        } else {
            String message = Thread.currentThread().getName() + " tried to buy a ticket, but none are available.";
            System.out.println(message);
            logger.warning(message);
        }
    }

    public synchronized void addTicket() {
        if (totalTickets < maxTicketCapacity) {
            totalTickets++;
            String message = Thread.currentThread().getName() + " added a ticket. Tickets available: " + totalTickets;
            System.out.println(message);
            logger.info(message);
        } else {
            String message = Thread.currentThread().getName() + " tried to add a ticket, but capacity is full.";
            System.out.println(message);
            logger.warning(message);
        }
    }
}
