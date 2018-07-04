// app.use('/', indexRouter);
// app.use('/scrape', scrapeRouter);

// Routes
// app.get('/', function (req, res) {
//   res.render('home');
// });

// app.get('/note', function (req, res) {
//   for (let i = 0; i < saved.length; i++) {}
//   res.render('notes');
// });

// app.get("/scrape", function (req, res) {

//   axios.get("http://www.echojs.com/").then(function (response) {

//     let $ = cheerio.load(response.data);

//     $("article h2").each(function (i, element) {

//       let result = {};


//       result.title = $(this)
//         .children("a")
//         .text();
//       result.link = $(this)
//         .children("a")
//         .attr("href");


//       db.Article.create(result)
//         .then(function (dbArticle) {
//           console.log(dbArticle);
//         })
//         .catch(function (err) {
//           return res.json(err);
//         });
//     });
//   });
//   res.render('scraper');
// });

// // Route for getting all Articles from the db
// app.get("/articles", function (req, res) {
//   // TODO: Finish the route so it grabs all of the articles
//   db.Article.find({}).then(function (dbArticle) {
//     res.json(dbArticle);
//   }).catch(function (err) {
//     res.json(err);
//   })
// });


// // Route for grabbing a specific Article by id, populate it with it's note
// app.get("/articles/:id", function (req, res) {
//   db.Article.findOne({
//     _id: mongoose.Types.ObjectId(req.params.id)
//   }).populate('Note').then(function (dbArticle) {
//     res.json(dbArticle);
//   }).catch(function (err) {
//     res.json(err);
//   });
//   // TODO
//   // ====
//   // Finish the route so it finds one article using the req.params.id,
//   // and run the populate method with "note",
//   // then responds with the article with the note included
// });

// // Route for saving/updating an Article's associated Note
// app.post("/articles/:id", function (req, res) {

//   db.Note.save({
//     _id: mongoose.Types.ObjectId(req.params.id)
//   }).then(function (dbNote) {
//     return db.Article.updateIt({}, {
//       $push: {
//         Article: dbArticle.id
//       }
//     }, {
//       new: true
//     });
//   }).then(function (dbArticle) {
//     res.json(dbArticle);
//   }).catch(function (err) {
//     res.json(err);
//   });
//   // TODO
//   // ====
//   // save the new note that gets posted to the Notes collection
//   // then find an article from the req.params.id
//   // and update it's "note" property with the _id of the new note
// });


// app.post('/save/:id', function (req, res) {
//   let id = mongoose.Types.ObjectId(req.params.id);


//   db.Article.update({
//     _id: mongoose.Types.ObjectId(req.params.id)
//   }, {
//     $set: {
//       isSaved: true
//     }
//   }, {
//     upsert: true
//   }).then(function (dbArticle) {
//     console.log(dbArticle);
//   }).catch(function (err) {
//     console.log(err);
//   });
// });