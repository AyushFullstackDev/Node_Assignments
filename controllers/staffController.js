const staffService = require('../services/staffService');

const createStaff = async (req, res) => {
  // Validation 
  if(!req.body.name || !req.body.institute_id || !req.body.role_id) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  const { name, institute_id, role_id } = req.body;
  const result = await staffService.create(name, institute_id, role_id);
  res.status(201).json({ success: true, data: result });
};

const getStaff = async (req, res) => {
  const result = await staffService.getAll();
  res.json({ success: true, data: result });
};

const getStaffById = async (req, res) => {
  const result = await staffService.getById(req.params.id);
  res.json({ success: true, data: result });
};

const updateStaff = async (req, res) => {
  const { name, institute_id, role_id } = req.body;
  const result = await staffService.update(req.params.id, name, institute_id, role_id);
  res.json({ success: true, data: result });
};

const deleteStaff = async (req, res) => {
  const result = await staffService.remove(req.params.id);
  res.json({ success: true, data: result });
};

module.exports = { createStaff, getStaff, getStaffById, updateStaff, deleteStaff };
