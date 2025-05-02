const Settings = require("../models/Settings");

// Get Settings
exports.getSettings = async (req, res) => {
  try {
    const settings = await Settings.findOne();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Settings
exports.updateSettings = async (req, res) => {
  try {
    const { companyName, logo } = req.body;
    const settings = await Settings.findOneAndUpdate({}, { companyName, logo }, { new: true, upsert: true });
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
