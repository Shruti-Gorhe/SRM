// Import required libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware allows frontend to talk to backend
app.use(cors());
app.use(express.json()); // allows JSON in requests

// Connect to MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/hackathon");

// Connect routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/records", require("./routes/recordRoutes"));

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
