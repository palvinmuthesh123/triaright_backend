const express = require("express");
const {
  getModules,
  getModuleById,
  createModule,
  updateModule,
  deleteModule,
  getModulesDetails
} = require("../controllers/courseController.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/", getModules);
router.get("/details", getModulesDetails);
router.get("/:id", getModuleById);
router.post("/", protect, createModule);
router.put("/:id", protect, updateModule);
router.delete("/:id", protect, deleteModule);

module.exports = router;
