const mongoose = require("mongoose");

// Structure of a record (can be patient/student/etc.)
const recordSchema = new mongoose.Schema({
  name: String,
  category: String,
  status: String,
  description: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Record", recordSchema);
