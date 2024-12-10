class TicketPool {
  constructor(initialTickets) {
    this.tickets = initialTickets;
  }

  addTickets(amount) {
    this.tickets += amount;
    return this.tickets;
  }

  buyTickets(amount) {
    if (this.tickets >= amount) {
      this.tickets -= amount;
      return { success: true, remaining: this.tickets };
    }
    return { success: false, message: "Not enough tickets available!" };
  }

  getTicketCount() {
    return this.tickets;
  }
}

module.exports = { TicketPool };
