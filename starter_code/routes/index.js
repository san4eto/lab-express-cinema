const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index.hbs");
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(movieDocuments => {
      res.render("movies.hbs", { moviesList: movieDocuments });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieDocument => {
      res.render("showtimes.hbs", movieDocument);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
