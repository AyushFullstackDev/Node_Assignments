const staffModel = require('../models/staffModel');

const create = (name, institute_id, role_id) => staffModel.createStaff(name, institute_id, role_id);
const getAll = () => staffModel.getStaff();
const getById = (id) => staffModel.getStaffById(id);
const update = (id, name, institute_id, role_id) => staffModel.updateStaff(id, name, institute_id, role_id);
const remove = (id) => staffModel.deleteStaff(id);

module.exports = { create, getAll, getById, update, remove };
