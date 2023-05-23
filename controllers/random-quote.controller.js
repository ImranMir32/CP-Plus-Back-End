const Quote = require("../models/quotes.json");

// Create random quote
const getRandomQuote = (req, res) => {
  try {
    const len = Quote.length;
    let ind = (Math.random() * len) | 0;
    res.status(201).json(Quote[ind]);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getRandomQuote,
};
