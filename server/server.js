const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");

dotenv.config();
server.use(cors());
server.use(bodyParser.json());

const port = process.env.PORT || 4000;
const staticFiles = express.static(path.join(__dirname, "../build"));

// server.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,OPTIONS,POST,PUT,DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
//   );
//   res.setHeader("Cache-Control", "no-cache");
//   next();
// });

https: server.get("/", (req, res) => {
  res.send(" === api is running === ");
});

const nodemailerRoute = require("./nodemailer");
server.use("/message", nodemailerRoute);

server.use("*", staticFiles);

server.listen(port, () => {
  console.log("== server is running on port 4000 ====");
});

//deploy

// heroku login
// heroku create
//https://git.heroku.com/myprotfolio.git
