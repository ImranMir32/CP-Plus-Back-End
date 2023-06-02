const express = require("express");
const router = express.Router();

const {
  //   getAllUsers,
  createUser,
  loginUser,
  //   getOneUser,
  //   deleteUser,
  //   updateUser,
} = require("../controllers/user.controller");

// router.get("/", getAllUsers);
// router.get("/:id", getOneUser);
// router.delete("/:id", deleteUser);
// router.patch("/:id", updateUser);
router.post("/signin", createUser);
router.post("/login", loginUser);

module.exports = router;
