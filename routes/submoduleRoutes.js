const express = require("express");
const {
  getSubModules,
  getSubModuleById,
  createSubModule,
  updateSubModule,
  deleteSubModule
} = require("../controllers/courseController.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/", getSubModules);
router.get("/:id", getSubModuleById);
router.post("/", protect, createSubModule);
router.put("/:id", protect, updateSubModule);
router.delete("/:id", protect, deleteSubModule);

module.exports = router;
