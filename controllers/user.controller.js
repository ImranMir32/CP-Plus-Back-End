const User = require("../models/user.model");

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// const getOneUser = async (req, res) => {
//   try {
//     const user = await User.findOne({ id: req.params.id });
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      hackerrankId: req.body.hackerrankId,
      phone: req.body.phone,
      password: req.body.password,
    });
    await newUser.save();
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// const updateUser = async (req, res) => {
//   try {
//     const user = await User.findOne({ id: req.params.id });
//     user.name = req.body.name;
//     user.age = Number(req.body.age);
//     await user.save();
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     await User.deleteOne({ id: req.params.id });
//     res.status(200).json({ message: "user is deleted" });
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

module.exports = {
  //   getAllUsers,
  //   getOneUser,
  createUser,
  //   updateUser,
  //   deleteUser,
};
