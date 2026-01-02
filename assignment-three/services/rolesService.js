const rolesModel = require('../models/rolesModel');

const create = (name) => rolesModel.createRole(name);
const getAll = () => rolesModel.getRoles();
const getById = (id) => rolesModel.getRoleById(id);
const update = (id, name) => rolesModel.updateRole(id, name);
const remove = (id) => rolesModel.deleteRole(id);

module.exports = { create, getAll, getById, update, remove };
