package org.example;

public class TicketPool {
    private int tickets;

    public TicketPool(int tickets) {
        this.tickets = tickets;
    }

    public synchronized void buyTicket() {
        if (tickets > 0) {
            tickets--;
            System.out.println(Thread.currentThread().getName() + " bought a ticket. Tickets remaining: " + tickets);
        } else {
            System.out.println(Thread.currentThread().getName() + " tried to buy a ticket, but none are available.");
        }
    }

    public synchronized void addTicket() {
        tickets++;
        System.out.println(Thread.currentThread().getName() + " added a ticket. Tickets available: " + tickets);
    }
}
