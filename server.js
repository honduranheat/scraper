const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const handlebars = require('express-handlebars');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
// const scrapeRouter = require('./routes/scrape');

const axios = require("axios");
const cheerio = require("cheerio");
const db = require("./models");
const app = express();


app.use(logger("dev"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');



require('./routes/index')(app);


// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/week18populator";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});