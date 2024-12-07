class Payment {
    constructor(paymentId, userId, amount, status) {
      this.paymentId = paymentId;
      this.userId = userId;
      this.amount = amount;
      this.status = status;
    }
  
    processPayment() {
      // Simulate payment processing
      console.log(`Processing payment for amount ${this.amount}`);
      this.status = "completed";
      return true;
    }
  }
  
  module.exports = Payment;
  