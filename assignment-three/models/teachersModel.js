// models/teachersModel.js
// DB queries for teachers

const pool = require('../database');

// Create a new teacher
const createTeacher = async (name, institute_id, subject_id, role_id) => {
  const res = await pool.query(
    `INSERT INTO teachers (name, institute_id, subject_id, role_id)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [name, institute_id, subject_id, role_id]
  );
  return res.rows[0];
};

// Get all teachers
const getTeachers = async () => {
  const res = await pool.query('SELECT * FROM teachers ORDER BY id ASC');
  return res.rows;
};

// Get teacher by ID
const getTeacherById = async (id) => {
  const res = await pool.query('SELECT * FROM teachers WHERE id=$1', [id]);
  return res.rows[0];
};

// Update teacher
const updateTeacher = async (id, name, institute_id, subject_id, role_id) => {
  const res = await pool.query(
    `UPDATE teachers
     SET name=$1, institute_id=$2, subject_id=$3, role_id=$4
     WHERE id=$5 RETURNING *`,
    [name, institute_id, subject_id, role_id, id]
  );
  return res.rows[0];
};

// Delete teacher
const deleteTeacher = async (id) => {
  await pool.query('DELETE FROM teachers WHERE id=$1', [id]);
  return { message: 'Teacher deleted successfully' };
};

module.exports = {
  createTeacher,
  getTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};
