const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization"); // get token from header

  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, "secretkey"); // verify token
    req.user = verified;
    next(); // continue to controller
  } catch {
    res.status(400).json({ message: "Invalid Token" });
  }
};
