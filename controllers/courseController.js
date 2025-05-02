const Course = require("../models/Course.js");
const Module = require("../models/Module.js");
const SubModule = require("../models/SubModule.js");
const Quiz = require("../models/Quiz.js");

/**
 * @desc    Get All Courses
 * @route   GET /api/courses
 * @access  Public
 */
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('moduleId').populate('subModuleId');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Get Single Course by ID
 * @route   GET /api/courses/:id
 * @access  Public
 */
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Create a New Course
 * @route   POST /api/courses
 * @access  Private (Admin Only)
 */
exports.createCourse = async (req, res) => {
  try {
    const { name, content, moduleId, subModuleId, video } = req.body;

    const newCourse = new Course({ name, content, moduleId, subModuleId, video });
    await newCourse.save();

    res.json({ message: "Course created successfully", course: newCourse });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Update Course
 * @route   PUT /api/courses/:id
 * @access  Private (Admin Only)
 */
exports.updateCourse = async (req, res) => {
  try {
    const { name, content, moduleId, subModuleId, video } = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { name, content, moduleId, subModuleId, video },
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ message: "Course updated successfully", course: updatedCourse });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Delete Course
 * @route   DELETE /api/courses/:id
 * @access  Private (Admin Only)
 */
exports.deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ....................................  Modules ........................................//

/**
 * @desc    Get All Modules
 * @route   GET /api/modules
 * @access  Public
 */
exports.getModules = async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Get Single Module by ID
 * @route   GET /api/modules/:id
 * @access  Public
 */
exports.getModuleById = async (req, res) => {
  try {
    const module = await Module.findById(req.params.id);
    if (!module) {
      return res.status(404).json({ message: "Module not found" });
    }
    res.json(module);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Create a New Modules
 * @route   POST /api/modules
 * @access  Private (Admin Only)
 */
exports.createModule = async (req, res) => {
  try {
    const { name, description } = req.body;

    const newModule = new Module({ name, description });
    await newModule.save();

    res.json({ message: "Module created successfully", module: newModule });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Update Module
 * @route   PUT /api/modules/:id
 * @access  Private (Admin Only)
 */
exports.updateModule = async (req, res) => {
  try {
    const { name, description } = req.body;

    const updatedModule = await Module.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );

    if (!updatedModule) {
      return res.status(404).json({ message: "Module not found" });
    }

    res.json({ message: "Module updated successfully", module: updatedModule });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Delete Module
 * @route   DELETE /api/modules/:id
 * @access  Private (Admin Only)
 */
exports.deleteModule = async (req, res) => {
  try {
    const deletedModule = await Module.findByIdAndDelete(req.params.id);

    if (!deletedModule) {
      return res.status(404).json({ message: "Module not found" });
    }

    res.json({ message: "Module deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ....................................  Sub Modules ........................................//

/**
 * @desc    Get All Sub Modules
 * @route   GET /api/submodules
 * @access  Public
 */
exports.getSubModules = async (req, res) => {
  try {
    const submodules = await SubModule.find().populate('moduleId');
    res.json(submodules);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Get Single Sub Module by ID
 * @route   GET /api/submodules/:id
 * @access  Public
 */
exports.getSubModuleById = async (req, res) => {
  try {
    const submodules = await SubModule.findById(req.params.id);
    if (!submodules) {
      return res.status(404).json({ message: "Sub Modules not found" });
    }
    res.json(submodules);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Create a New Sub Module
 * @route   POST /api/submodules
 * @access  Private (Admin Only)
 */
exports.createSubModule = async (req, res) => {
  try {
    const { name, description, moduleId } = req.body;

    const newSubModule = new SubModule({ name, description, moduleId });
    await newSubModule.save();

    res.json({ message: "Sub Module created successfully", module: newSubModule });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Update Sub Modules
 * @route   PUT /api/submodules/:id
 * @access  Private (Admin Only)
 */
exports.updateSubModule = async (req, res) => {
  try {
    const { name, description, moduleId } = req.body;

    const updatedSubModule = await SubModule.findByIdAndUpdate(
      req.params.id,
      { name, description, moduleId },
      { new: true }
    );

    if (!updatedSubModule) {
      return res.status(404).json({ message: "Sub Modules not found" });
    }

    res.json({ message: "Sub Module updated successfully", module: updatedSubModule });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Delete Sub Modules
 * @route   DELETE /api/submodules/:id
 * @access  Private (Admin Only)
 */
exports.deleteSubModule = async (req, res) => {
  try {
    const deletedSubModule = await SubModule.findByIdAndDelete(req.params.id);

    if (!deletedSubModule) {
      return res.status(404).json({ message: "Sub Module not found" });
    }

    res.json({ message: "Sub Module deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


// ....................................  Quiz ........................................//

/**
 * @desc    Get All Quiz
 * @route   GET /api/quizes
 * @access  Public
 */
exports.getQuizes = async (req, res) => {
  try {
    const quiz = await Quiz.find();
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Get Single Quiz by ID
 * @route   GET /api/quizes/:id
 * @access  Public
 */
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Create a New Quiz
 * @route   POST /api/quizes
 * @access  Private (Admin Only)
 */
exports.createQuiz = async (req, res) => {
  try {
    const { name, content, moduleId, subModuleId, courseId } = req.body;

    const newQuiz = new Quiz({ name, content, moduleId, subModuleId, courseId });
    await newQuiz.save();

    res.json({ message: "Quiz created successfully", module: newQuiz });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Update Quiz
 * @route   PUT /api/quizes/:id
 * @access  Private (Admin Only)
 */
exports.updateQuiz = async (req, res) => {
  try {
    const { name, content, moduleId, subModuleId, courseId } = req.body;

    const updatedQuiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      { name, content, moduleId, subModuleId, courseId },
      { new: true }
    );

    if (!updatedQuiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.json({ message: "Quiz updated successfully", module: updatedQuiz });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * @desc    Delete Quiz
 * @route   DELETE /api/quizes/:id
 * @access  Private (Admin Only)
 */
exports.deleteQuiz = async (req, res) => {
  try {
    const deletedQuiz = await Quiz.findByIdAndDelete(req.params.id);

    if (!deletedQuiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.json({ message: "Quiz deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};