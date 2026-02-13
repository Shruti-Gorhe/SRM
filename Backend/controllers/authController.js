const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register new user
exports.register = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10); // encrypt password
  const user = new User({ email: req.body.email, password: hashed });
  await user.save();
  res.json({ message: "User registered" });
};

// Login existing user
exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(400).json({ message: "Wrong password" });

  // Create token
  const token = jwt.sign({ id: user._id }, "secretkey");
  res.json({ token });
};
