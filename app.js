// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const connectDB2 = require("./config/signup");
const connectDB3 = require("./config/login");
const route = require("./routes/dataRoutes");
const route2 = require("./routes/signUpRoutes");

connectDB();
connectDB2();
connectDB3();

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/", require("./routes/dataRoutes"));
app.use("/", require("./routes/signUpRoutes"));
app.use("/", require("./routes/loginRoutes"));

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Set views folder
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route to render the homepage
app.get("/", (req, res) => {
  res.render("index");
});

// Route to render Login page
app.get("/user-login", (req, res) => {
  res.render("user-login");
});

// Route to render notification page
app.get("/notification", (req, res) => {
  res.render("notification");
});

// Route to render the EJS form
app.get("/app-form", (req, res) => {
  res.render("app-form");
});

// Route to render the Services page
app.get("/services", (req, res) => {
  res.render("services");
});

// Route to render the Services page
app.get("/our-team", (req, res) => {
  res.render("our-team");
});

// Route to render the Services page
app.get("/appointments", (req, res) => {
  res.render("appointments");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Database Code below...
// ----------------------

// MongoDB connection for Appointment form
// mongoose
//   .connect("mongodb://localhost:27017/myDatabase")
//   .then(() => {
//     console.log("MongoDB is connected!");
//   })
//   .catch((err) => {
//     console.error("Mongo connection error:", err);
//   });

// Created Schema for all the data
// const Schema = mongoose.Schema;

// const dataSchema = new Schema({
//   fullName: String,
//   email: String,
//   number: Number,
//   dateOfBirth: Date,
//   address: String,
//   appointmentDate: Date,
//   preferredTime: String,
//   preferredDoctor: String,
//   description: String,
// });

// Created model of the database
// const Data = mongoose.model("Data", dataSchema);

// posted data to the database [These are value of name attribute in input field]
// app.post("/submit", (req, res) => {
//   const { name, email, phone, dob, address, appdate, pt, dname, message } =
//     req.body;

//   const newData = new Data({
//     fullName: name,
//     email: email,
//     number: phone,
//     dateOfBirth: dob,
//     address: address,
//     appointmentDate: appdate,
//     preferredTime: pt,
//     preferredDoctor: dname,
//     description: message,
//   });
//   newData
//     .save()
//     .then(() => {
//       res.status(201).redirect("/");
//     })
//     .catch((err) => {
//       res.status(500).send("Error saving data: " + err.message);
//     });
// });
