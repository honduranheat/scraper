// var express = require('express');
// var router = express.Router();
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");
const mongoose = require("mongoose");

module.exports = (app) => { // GET home page.
  app.get('/', (req, res) => {
    res.render('home');
  })

  app.get('/saved', (req, res) => {
    res.render('notes');
  });

  app.post('/save/:id', (req, res) => {
    let id = mongoose.Types.ObjectId(req.params.id);
    console.log(id);
    db.Article.update({
      _id: req.params.id
    }, {
      $set: {
        isSaved: true
      }
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
    // db.Article.update({
    //   _id: mongoose.Types.ObjectId(req.params.id)
    // }, {
    //   $set: {
    //     isSaved: true
    //   }
    // }, {
    //   upsert: true
    // }).then(function (data) {
    //   console.log(data);
    // }).catch(function (err) {
    //   console.log(err);
    // });
    // res.redirect('home');
  });

  app.get("/scrape", (req, res) => {

    axios.get("http://www.echojs.com/").then((response) => {

      var $ = cheerio.load(response.data);

      $("article h2").each((i, element) => {

        var result = {};

        result.title = $(this)
          .children("a")
          .text();
        result.link = $(this)
          .children("a")
          .attr("href");


        db.Article.create(result)
          .then(function (dbArticle) {
            console.log(dbArticle);
          })
          .catch(function (err) {
            return res.json(err);
          });
      });
    });
    res.redirect('/');
  });

  app.get("/articles", (req, res) => {
    db.Article.find({}).then((dbArticle) => {
      res.json(dbArticle);
    }).catch((err) => {
      res.json(err);
    })
  });


  app.get("/articles/:id", (req, res) => {
    db.Article.findOne({
      _id: mongoose.Types.ObjectId(req.params.id)
    }).populate('Note').then(function (dbArticle) {
      res.json(dbArticle);
    }).catch((err) => {
      res.json(err);
    });
  });
};