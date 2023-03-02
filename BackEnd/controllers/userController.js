const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: "1h" });
  return token;
};

//login

const loginUser = (req, res) => {
  res.json("zalogowano");
};

//register

const signUpUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

const token= createToken(user._id)
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
};
