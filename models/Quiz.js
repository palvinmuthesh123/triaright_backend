const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  content: [{
    question: String,
    opts: Array,
    correctOption: String
  }],
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: "Module", required: true },
  subModuleId: { type: mongoose.Schema.Types.ObjectId, ref: "SubModule", required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Quiz", courseSchema);
