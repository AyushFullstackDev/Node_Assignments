const pool = require('../database');
const queries = require('../queries/queries');

const createTeacher = async (name, institute_id, subject_id, role_id) => {
  const res = await pool.query(
    queries.teachers.create,
    [name, institute_id, subject_id, role_id]
  );
  return res.rows[0];
};

const getTeachers = async () => {
  const res = await pool.query(queries.teachers.getAll);
  return res.rows;
};

const getTeacherById = async (id) => {
  const res = await pool.query(queries.teachers.getById, [id]);
  return res.rows[0];
};

const updateTeacher = async (id, name, institute_id, subject_id, role_id) => {
  const res = await pool.query(
    queries.teachers.update,
    [name, institute_id, subject_id, role_id, id]
  );
  return res.rows[0];
};

const deleteTeacher = async (id) => {
  await pool.query(queries.teachers.delete, [id]);
  return { message: 'Teacher deleted successfully' };
};

module.exports = {
  createTeacher,
  getTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher
};
