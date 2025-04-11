// Logic for handling requests

const Data = require("../models/data");

const saveData = async (req, res) => {
  const { name, email, phone, dob, address, appdate, pt, dname, message } =
    req.body;

  const newData = new Data({
    fullName: name,
    email: email,
    number: phone,
    dateOfBirth: dob,
    address: address,
    appointmentDate: appdate,
    preferredTime: pt,
    preferredDoctor: dname,
    description: message,
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
