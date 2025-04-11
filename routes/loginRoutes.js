const express = require("express");
const { saveData } = require("../controllers/loginController");

const router = express.Router();

// POST /submit - Save data to the database
router.post("/submit", saveData);

module.exports = router;
