const mongoose = require("mongoose");

const settingsSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      default: "Cogent Cube",
    },
    logoUrl: {
      type: String,
      default: "",
    },
    primaryColor: {
      type: String,
      default: "#000000",
    },
    secondaryColor: {
      type: String,
      default: "#ffffff",
    },
    contactEmail: {
      type: String,
      required: true,
      default: "support@cogentcube.com",
    },
    contactPhone: {
      type: String,
      default: "+91 9876543210",
    },
    address: {
      type: String,
      default: "Coimbatore, Tamil Nadu, India",
    },
    enableNotifications: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;
