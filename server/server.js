const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
server.use(cors());
server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.send(" === api is running === ");
});
const nodemailerRoute = require("./nodemailer");
server.use("/message", nodemailerRoute);

server.listen(4000, () => {
  console.log("== server is running on port 4000 ====");
});
