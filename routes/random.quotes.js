const express = require("express");
const router = express.Router();

const { getRandomQuote } = require("../controllers/random-quote.controller.js");
router.get("/", getRandomQuote);

module.exports = router;
