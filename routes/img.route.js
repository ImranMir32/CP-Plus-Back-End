const express = require("express");
const router = express.Router();
const checkLogin = require("../middlewares/checkLogin");
// const imageModel = require("../models/img.models");
const multer = require("multer");
const {
  imgUpload,
  getImg,
  updateImg,
} = require("../controllers/img.controller");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("testImage"), imgUpload);
router.get("/:email", getImg);
router.put("/:email", upload.single("testImage"), updateImg);

module.exports = router;
