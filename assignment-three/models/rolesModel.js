const pool = require('../database');
const queries = require('../queries/queries');

// Create Role
const createRole = async (name) => {
  const res = await pool.query(
    queries.roles.create,
    [name]
  );
  return res.rows[0];
};

// Get all Roles
const getRoles = async () => {
  const res = await pool.query(
    queries.roles.getAll
  );
  return res.rows;
};

// Get Role by ID
const getRoleById = async (id) => {
  const res = await pool.query(
    queries.roles.getById,
    [id]
  );
  return res.rows[0];
};

// Update Role
const updateRole = async (id, name) => {
  const res = await pool.query(
    queries.roles.update,
    [name, id]
  );
  return res.rows[0];
};

// Delete Role
const deleteRole = async (id) => {
  await pool.query(
    queries.roles.delete,
    [id]
  );
  return { message: 'Role deleted successfully' };
};

module.exports = {
  createRole,
  getRoles,
  getRoleById,
  updateRole,
  deleteRole
};
