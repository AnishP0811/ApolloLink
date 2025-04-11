const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  fullname: String,
  mobileNumber: Number,
  password: String,
});

module.exports = mongoose.model("signUpModel", signupSchema);
