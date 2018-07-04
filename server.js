const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const handlebars = require('express-handlebars');
const mongoose = require("mongoose");

// const scrapeRouter = require('./routes/scrape');

const axios = require("axios");
const cheerio = require("cheerio");
const db = require("./models");
const PORT = 3000;
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

mongoose.connect("mongodb://localhost/week18Populater");

require('./routes/index')(app);



app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});