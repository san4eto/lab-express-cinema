const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  // res.send();
  res.render("index.hbs");
});

router.get("/movies", (req, res, next) => {
  res.render("movies.hbs");
});

module.exports = router;
