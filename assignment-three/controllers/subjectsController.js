const subjectsService = require('../services/subjectsService');

const createSubject = async (req, res) => {
  try {
    const result = await subjectsService.create(req.body.name);
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getSubjects = async (req, res) => {
  const result = await subjectsService.getAll();
  res.json({ success: true, data: result });
};

const getSubjectById = async (req, res) => {
  try {
    const result = await subjectsService.getById(req.params.id);
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
};

const updateSubject = async (req, res) => {
  try {
    const result = await subjectsService.update(
      req.params.id,
      req.body.name
    );
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const deleteSubject = async (req, res) => {
  try {
    const result = await subjectsService.remove(req.params.id);
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
};

module.exports = {
  createSubject,
  getSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
};