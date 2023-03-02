const User = require("../models/userModel");

//login

const loginUser = (req, res) => {
  res.json("zalogowano");
};

//register

const signUpUser = async(req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
};
