const express = require("express");
const { loginAdmin, registerAdmin } = require("../controllers/authController.js");

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/register", registerAdmin); // (For initial setup only)

module.exports = router;
