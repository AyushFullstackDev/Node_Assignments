// models/staffModel.js
// DB queries for staff

const pool = require('../database');

// Create staff
const createStaff = async (name, institute_id, role_id) => {
  const res = await pool.query(
    `INSERT INTO staff (name, institute_id, role_id)
     VALUES ($1, $2, $3) RETURNING *`,
    [name, institute_id, role_id]
  );
  return res.rows[0];
};

// Get all staff
const getStaff = async () => {
  const res = await pool.query('SELECT * FROM staff ORDER BY id ASC');
  return res.rows;
};

// Get staff by ID
const getStaffById = async (id) => {
  const res = await pool.query('SELECT * FROM staff WHERE id=$1', [id]);
  return res.rows[0];
};

// Update staff
const updateStaff = async (id, name, institute_id, role_id) => {
  const res = await pool.query(
    `UPDATE staff SET name=$1, institute_id=$2, role_id=$3 WHERE id=$4 RETURNING *`,
    [name, institute_id, role_id, id]
  );
  return res.rows[0];
};

// Delete staff
const deleteStaff = async (id) => {
  await pool.query('DELETE FROM staff WHERE id=$1', [id]);
  return { message: 'Staff deleted successfully' };
};

module.exports = { 
  createStaff, 
  getStaff, 
  getStaffById, 
  updateStaff, 
  deleteStaff 
};
