const Record = require("../models/Record");

// Get all records
exports.getRecords = async (req, res) => {
  const records = await Record.find();
  res.json(records);
};

// Add new record
exports.addRecord = async (req, res) => {
  const record = new Record(req.body);
  await record.save();
  res.json(record);
};

// Update record
exports.updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(record);
};

// Delete record
exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
