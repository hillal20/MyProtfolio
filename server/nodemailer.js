const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

router.post("/", (req, res) => {
  const { name, lastName, message } = req.body;
  if (name === "" || lastName === "" || message === "") {
    return;
  }

  let transporter = nodemailer.createTransport({
    service: "hotmail",
    secure: false,
    port: 25,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let mailOptions = {
    from: `${req.body.name} ${req.body.lastName}`,
    to: "hilalaissani@gmail.com",
    subject: ` portfolio message  from "${req.body.name}" "${
      req.body.lastName
    }"`,
    text: req.body.message
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err.message);
    }
    console.log("message is emailed", info);
  });

  res.send("Message is sent");
});

module.exports = router;
