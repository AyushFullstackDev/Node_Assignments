const pool = require('../database');

const createSubject = async (name) => {
  const res = await pool.query(
    'INSERT INTO subjects (name) VALUES ($1) RETURNING *',
    [name]
  );
  return res.rows[0];
};

const getSubjects = async () => {
  const res = await pool.query('SELECT * FROM subjects');
  return res.rows;
};

const getSubjectById = async (id) => {
  const res = await pool.query('SELECT * FROM subjects WHERE id=$1', [id]);
  return res.rows[0];
};

const updateSubject = async (id, name) => {
  const res = await pool.query(
    'UPDATE subjects SET name=$1 WHERE id=$2 RETURNING *',
    [name, id]
  );
  return res.rows[0];
};

const deleteSubject = async (id) => {
  await pool.query('DELETE FROM subjects WHERE id=$1', [id]);
  return { message: 'Subject deleted successfully' };
};

module.exports = {
  createSubject,
  getSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
};
