const express = require("express");
const router = express.Router();
const checkLogin = require("../middlewares/checkLogin");

const {
  //   getAllUsers,
  createUser,
  loginUser,
  updateUser,
  //   getOneUser,
  //   deleteUser,
  //   updateUser,
} = require("../controllers/user.controller");

// router.get("/:id", getOneUser);
// router.delete("/:id", deleteUser);
// router.patch("/:id", updateUser);
router.post("/signin", createUser);
router.post("/login", loginUser);
router.put("/update/:email", updateUser);
// router.get("/", checkLogin, getTheUser);

module.exports = router;
