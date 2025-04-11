const Data = require("../models/signUpModel");

const saveData = async (req, res) => {
  const { fname, phonenum, pwd } = req.body;

  const newData = new Data({
    fullname: fname,
    mobileNumber: phonenum,
    password: pwd,
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
