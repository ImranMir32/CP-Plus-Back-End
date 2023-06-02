const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      hackerrankId: req.body.hackerrankId,
      phone: req.body.phone,
      password: hashedPassword,
    });
    await newUser.save();
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    console.log(user);
    if (user && user.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );

      if (isValidPassword) {
        // generate token
        const token = jwt.sign(
          {
            name: user[0].name,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );

        res.status(200).json({
          access_token: token,
          message: "Login successful!",
        });
      } else {
        res.status(401).json({
          error: "Authetication failed!",
        });
      }
    } else {
      res.status(401).json({
        error: "Authetication failed!",
      });
    }
  } catch {
    res.status(401).json({
      error: "Authetication failed!",
    });
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
  loginUser,
  //   updateUser,
  //   deleteUser,
};
