const mongoose = require("mongoose");

const connectDB3 = async () => {
  try {
    await mongoose.createConnection("mongodb://localhost:27017/logInData");
    console.log("LogInData connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB3;
