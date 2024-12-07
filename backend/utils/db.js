// utils/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://isharaagunasekara03:<oyurdtGX4nQ92NgJ>@ticket-management.7g7rl.mongodb.net/?retryWrites=true&w=majority&appName=Ticket-management", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
