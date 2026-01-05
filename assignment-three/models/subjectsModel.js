const pool = require('../database');
const queries = require('../queries/queries');

// Create Subject
const createSubject = async (name) => {
  const res = await pool.query(
    queries.subjects.create,
    [name.toLowerCase()]
  );
  return res.rows[0];
};

// Get all Subjects
const getSubjects = async () => {
  const res = await pool.query(queries.subjects.getAll);
  return res.rows;
};

// Get Subject by ID
const getSubjectById = async (id) => {
  const res = await pool.query(
    queries.subjects.getById,
    [id]
  );
  return res.rows[0];
};

// Update Subject
const updateSubject = async (id, name) => {
  const res = await pool.query(
    queries.subjects.update,
    [name.toLowerCase(), id]
  );
  return res.rows[0];
};

// Delete Subject
const deleteSubject = async (id) => {
  const res = await pool.query(
    queries.subjects.delete,
    [id]
  );
  return res.rows[0];
};

module.exports = {
  createSubject,
  getSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject
};
