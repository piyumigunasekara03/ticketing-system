class Payment {
  constructor(paymentId, userId, amount, status) {
    this.paymentId = paymentId;
    this.userId = userId;
    this.amount = amount;
    this.status = status;
  }

  processPayment() {
    if (this.amount > 0) {
      this.status = "completed";
      return true;
    }
    this.status = "failed";
    return false;
  }
}

module.exports = Payment;
