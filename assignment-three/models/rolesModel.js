const pool = require('../database');

// Create role
const createRole = async (name) => {
  const res = await pool.query(
    'INSERT INTO roles (name) VALUES ($1) RETURNING *',
    [name]
  );
  return res.rows[0];
};

// Get all roles
const getRoles = async () => {
  const res = await pool.query('SELECT * FROM roles');
  return res.rows;
};

// Get role by ID
const getRoleById = async (id) => {
  const res = await pool.query('SELECT * FROM roles WHERE id=$1', [id]);
  return res.rows[0];
};

// Update role
const updateRole = async (id, name) => {
  const res = await pool.query(
    'UPDATE roles SET name=$1 WHERE id=$2 RETURNING *',
    [name, id]
  );
  return res.rows[0];
};

// Delete role
const deleteRole = async (id) => {
  await pool.query('DELETE FROM roles WHERE id=$1', [id]);
  return { message: 'Role deleted successfully' };
};

module.exports = { 
  createRole, 
  getRoles, 
  getRoleById, 
  updateRole, 
  deleteRole 
};
