// Mongoose model and Schema code

const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  number: Number,
  dateOfBirth: Date,
  address: String,
  appointmentDate: Date,
  preferredTime: String,
  preferredDoctor: String,
  description: String,
});

module.exports = mongoose.model("data", dataSchema);
