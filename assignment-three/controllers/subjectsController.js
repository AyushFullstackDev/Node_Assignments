const subjectsService = require('../services/subjectsService');

const createSubject = async (req, res) => {
  const result = await subjectsService.create(req.body.name);
  res.status(201).json({ success: true, data: result });
};

const getSubjects = async (req, res) => {
  const result = await subjectsService.getAll();
  res.json({ success: true, data: result });
};

const getSubjectById = async (req, res) => {
  const result = await subjectsService.getById(req.params.id);
  res.json({ success: true, data: result });
};

const updateSubject = async (req, res) => {
  const result = await subjectsService.update(req.params.id, req.body.name);
  res.json({ success: true, data: result });
};

const deleteSubject = async (req, res) => {
  const result = await subjectsService.remove(req.params.id);
  res.json({ success: true, data: result });
};

module.exports = {
  createSubject,
  getSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
};
