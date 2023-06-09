const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    reuire: true,
  },
  email: {
    type: String,
    require: true,
    // trim: true,
    unique: true,
  },
  hackerrankId: {
    type: String,
    reuire: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },

  earn_score: {
    type: Number,
  },
  total_attempted_score: {
    type: Number,
  },
});

module.exports = mongoose.model("User", userSchema);
