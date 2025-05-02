const express = require("express");
const {
  getQuizes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/courseController.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/", getQuizes);
router.get("/:id", getQuizById);
router.post("/", protect, createQuiz);
router.put("/:id", protect, updateQuiz);
router.delete("/:id", protect, deleteQuiz);

module.exports = router;
