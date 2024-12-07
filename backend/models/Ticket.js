// backend/models/Ticket.js

class Ticket {
    constructor(ticketId, userId, eventName) {
      this.ticketId = ticketId;
      this.userId = userId;
      this.eventName = eventName;
    }
  }
  
  class TicketPool {
    constructor(initialTickets) {
      this.tickets = initialTickets; // Current number of tickets
    }
  
    // Method to add tickets
    addTickets(amount) {
      this.tickets += amount;
      return this.tickets;
    }
  
    // Method to buy a ticket
    buyTickets(amount) {
      if (this.tickets >= amount) {
        this.tickets -= amount;
        return { success: true, remaining: this.tickets };
      }
      return { success: false, message: "Not enough tickets available!" };
    }
  
    // Method to get the current ticket count
    getTicketCount() {
      return this.tickets;
    }
  }
  
  module.exports = { Ticket, TicketPool };
  