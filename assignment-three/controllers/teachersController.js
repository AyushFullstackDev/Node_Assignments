// controllers/teachersController.js
// Handles HTTP requests for teachers

const teachersService = require('../services/teachersService');

// Create a new teacher
const createTeacher = async (req, res) => {
  const { name, institute_id, subject_id, role_id } = req.body;
  const result = await teachersService.create(name, institute_id, subject_id, role_id);
  res.status(201).json({ success: true, data: result });
};

// Get all teachers
const getTeachers = async (req, res) => {
  const result = await teachersService.getAll();
  res.json({ success: true, data: result });
};

// Get teacher by ID
const getTeacherById = async (req, res) => {
  const result = await teachersService.getById(req.params.id);
  res.json({ success: true, data: result });
};

// Update teacher
const updateTeacher = async (req, res) => {
  const { name, institute_id, subject_id, role_id } = req.body;
  const result = await teachersService.update(req.params.id, name, institute_id, subject_id, role_id);
  res.json({ success: true, data: result });
};

// Delete teacher
const deleteTeacher = async (req, res) => {
  const result = await teachersService.remove(req.params.id);
  res.json({ success: true, data: result });
};

module.exports = { createTeacher, getTeachers, getTeacherById, updateTeacher, deleteTeacher };
