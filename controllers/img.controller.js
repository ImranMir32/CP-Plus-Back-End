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

const getImg = async (req, res) => {
  try {
    console.log(req.params.email);
    const data = await imageModel.findOne({ email: req.params.email });
    // console.log("data email->", data.img.data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const updateImg = async (req, res) => {
  try {
    const existingImage = await imageModel.findOne({ email: req.params.email });
    if (!existingImage) {
      return res.status(404).send("Image not found");
    }

    existingImage.img = {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    };

    const updatedImage = await existingImage.save();
    console.log("Image is updated");
    console.log(updatedImage);
    res.send(updatedImage);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  imgUpload,
  getImg,
  updateImg,
};
