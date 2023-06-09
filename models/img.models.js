const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = ImageModel = mongoose.model("Image", imgSchema);
