const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  mobileNumber: Number,
  password: String,
});

module.exports = mongoose.model("loginModel", loginSchema);
