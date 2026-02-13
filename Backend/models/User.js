const mongoose = require("mongoose");

// Structure of user data in database
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);
