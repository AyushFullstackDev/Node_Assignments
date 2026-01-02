const staffService = require('../services/staffService');

//Create Staff
const createStaff = async (req, res) => {
  const { 
    name, 
    institute_id, 
    role_id 
  } = req.body;
  const result = await staffService.create(
    name, 
    institute_id, 
    role_id
  );
  res.status(201).json({ 
    success: true, 
    data: result 
  });
};

//Get Staff
const getStaff = async (req, res) => {
  const result = await staffService.getAll();
  res.json({ 
    success: true, 
    data: result 
  });
};

// Get Staff by id
const getStaffById = async (req, res) => {
  const result = await staffService.getById(req.params.id);
  res.json({ 
    success: true, 
    data: result 
  });
};

//Update Staff
const updateStaff = async (req, res) => {
  const { 
    name, 
    institute_id, 
    role_id 
  } = req.body;
  const result = await staffService.update(
    req.params.id, 
    name, 
    institute_id, 
    role_id
  );
  res.json({ 
    success: true, 
    data: result 
  });
};

//delete Staff
const deleteStaff = async (req, res) => {
  const result = await staffService.remove(req.params.id);
  res.json({ 
    success: true, 
    data: result 
  });
};

module.exports = {
  createStaff,
  getStaff,
  getStaffById,
  updateStaff,
  deleteStaff
};
