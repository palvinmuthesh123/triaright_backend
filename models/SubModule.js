const mongoose = require("mongoose");

const subModuleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: "Module", required: true },
}, { timestamps: true });

module.exports = mongoose.model("SubModule", subModuleSchema);
