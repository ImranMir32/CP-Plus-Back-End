const imageModel = require("../models/img.models");
const fs = require("fs");

const imgUpload = async (req, res) => {
  try {
    console.log("I;m there");
    console.log(req.body);
    const saveImage = imageModel({
      email: req.body.email,
      img: {
        data: fs.readFileSync("uploads/" + req.file.filename),
        contentType: "image/png",
      },
    });
    saveImage
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
    console.log("image is saved");
    res.send("image is saved");
  } catch (error) {
    console.log("error");
    res.status(500).send(error.message);
  }
};

// app.get("/", async (req, res) => {
//   const allData = await imageModel.find();
//   res.json(allData);
// });

module.exports = {
  imgUpload,
};
