const express = require("express");
const router = express.Router();
const controller = require("../controllers/recordController");
const auth = require("../middleware/authMiddleware");

// Protect routes using middleware
router.get("/", auth, controller.getRecords);
router.post("/", auth, controller.addRecord);
router.put("/:id", auth, controller.updateRecord);
router.delete("/:id", auth, controller.deleteRecord);

module.exports = router;
