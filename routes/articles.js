var express = require('express');
var router = express.Router();
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");


// app.get("/articles", function (req, res) {
  
//     db.Article.find({}).then(function (dbArticle) {
//       res.json(dbArticle);
//     }).catch(function (err) {
//       res.json(err);
//     })
//   });
  
 
//   app.get("/articles/:id", function (req, res) {
//     db.Article.findOne({
//       _id: mongoose.Types.ObjectId(req.params.id)
//     }).populate('Note').then(function (dbArticle) {
//       res.json(dbArticle);
//     }).catch(function (err) {
//       res.json(err);
//     });
 
//   });
  

module.exports = router;