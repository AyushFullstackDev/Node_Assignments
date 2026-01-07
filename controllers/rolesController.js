const rolesService = require('../services/rolesService');

const createRole = async (req, res) => {
  // Validation for match column
  if(!req.body.name) {
    return res.status(400).json({ success: false, message: 'name is required' });
  }
  try {
    const result = await rolesService.create(req.body.name);
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getRoles = async (req, res) => {
  try {
    const result = await rolesService.getAll();
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getRoleById = async (req, res) => {
  try {
    const result = await rolesService.getById(req.params.id);
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateRole = async (req, res) => {
  try {
    const result = await rolesService.update(req.params.id, req.body.name);
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteRole = async (req, res) => {
  try {
    const result = await rolesService.remove(req.params.id);
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { createRole, getRoles, getRoleById, updateRole, deleteRole };
