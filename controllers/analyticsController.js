const Course = require("../models/Course");
const User = require("../models/User");

// Get Dashboard Analytics
exports.getAnalytics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCourses = await Course.countDocuments();
    
    res.json({ totalUsers, totalCourses });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
