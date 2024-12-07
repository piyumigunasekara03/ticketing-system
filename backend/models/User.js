class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  
    // Example method for user authentication
    authenticate(password) {
      // Replace with actual password check logic
      return password === "password123";
    }
  }
  
  module.exports = User;
  