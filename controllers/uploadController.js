const cloudinary = require("../config/cloudinaryConfig");

// Upload File
exports.uploadFile = async (req, res) => {
  try {
    const file = req.files.file;
    const result = await cloudinary.uploader.upload(file.tempFilePath);
    res.json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({ message: "Upload Failed" });
  }
};
