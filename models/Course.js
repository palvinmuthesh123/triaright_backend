const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: String,
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: "Module", required: true },
  subModuleId: { type: mongoose.Schema.Types.ObjectId, ref: "SubModule", required: true },
  video: String,
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);
