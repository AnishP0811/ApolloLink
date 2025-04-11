// API routes code

const express = require("express");
const { saveData } = require("../controllers/dataController");
const Data = require("../models/data");

const router = express.Router();

// POST /submit - Save data to the database
router.post("/submit", saveData);

// GET /appointments - Fetch all appointments and render the EJS template
router.get("/appointments", async (req, res) => {
  try {
    const appointments = await Data.find(); // Fetch all data from the database
    res.render("appointments", { appointments }); // Render the EJS template and pass data
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).send("Error fetching appointments");
  }
});

module.exports = router;
