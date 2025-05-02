const express = require("express");
const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  getModules,
  getModuleById,
  createModule,
  updateModule,
  deleteModule,
  getSubModules,
  getSubModuleById,
  createSubModule,
  updateSubModule,
  deleteSubModule,
  getQuizes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/courseController.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/", getCourses);
router.get("/:id", getCourseById);
router.post("/", protect, createCourse);
router.put("/:id", protect, updateCourse);
router.delete("/:id", protect, deleteCourse);

router.get("/modules", getModules);
router.get("/modules/:id", getModuleById);
router.post("/modules", protect, createModule);
router.put("/modules/:id", protect, updateModule);
router.delete("/modules/:id", protect, deleteModule);

router.get("/submodules", getSubModules);
router.get("/submodules/:id", getSubModuleById);
router.post("/submodules/", protect, createSubModule);
router.put("/submodules/:id", protect, updateSubModule);
router.delete("/submodules/:id", protect, deleteSubModule);

router.get("/quizes", getQuizes);
router.get("/quizes/:id", getQuizById);
router.post("/quizes/", protect, createQuiz);
router.put("/quizes/:id", protect, updateQuiz);
router.delete("/quizes/:id", protect, deleteQuiz);

module.exports = router;
