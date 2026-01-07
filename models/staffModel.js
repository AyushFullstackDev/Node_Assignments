const pool = require('../database');
const queries = require('../queries/queries');

// Create Staff
const createStaff = async (name, institute_id, role_id) => {
  const res = await pool.query(
    queries.staff.create,
    [name, institute_id, role_id]
  );
  return res.rows[0];
};

// Get all Staff
const getStaff = async () => {
  const res = await pool.query(queries.staff.getAll);
  return res.rows;
};

// Get Staff by ID
const getStaffById = async (id) => {
  const res = await pool.query(
    queries.staff.getById,
    [id]
  );
  return res.rows[0];
};

// Update Staff
const updateStaff = async (id, name, institute_id, role_id) => {
  const res = await pool.query(
    queries.staff.update,
    [name, institute_id, role_id, id]
  );
  return res.rows[0];
};

// Delete Staff
const deleteStaff = async (id) => {
  await pool.query(
    queries.staff.delete,
    [id]
  );
  return { message: 'Staff deleted successfully' };
};

module.exports = {
  createStaff,
  getStaff,
  getStaffById,
  updateStaff,
  deleteStaff
};
