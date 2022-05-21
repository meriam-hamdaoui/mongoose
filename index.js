const dotenv = require("dotenv").config();
const express = require("express");

//import local module
const errorMsg = require("./controllers/errorMsg");
const connectDB = require("./config/connectDB");
const people = require("./routes/personRoute");

//import constant
const listener = require("./constants/constant");

//1.initiate an express server
const app = express();

//3.connect DB
connectDB();

//4-parse data
app.use(express.json());

//5.define routes
app.use("/api/people", people);

//2.run server
const port = process.env.PORT || 6000;
app.listen(port, (err) => errorMsg(err, listener + port));

// console.log("port => " + process.env.PORT);
// console.log("uri => " + process.env.MONGO_URI);
