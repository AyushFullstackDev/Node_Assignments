// services/teachersService.js
// Business logic for teachers

const teachersModel = require('../models/teachersModel');

const create = (name, institute_id, subject_id, role_id) =>
  teachersModel.createTeacher(name, institute_id, subject_id, role_id);

const getAll = () => teachersModel.getTeachers();

const getById = (id) => teachersModel.getTeacherById(id);

const update = (id, name, institute_id, subject_id, role_id) =>
  teachersModel.updateTeacher(id, name, institute_id, subject_id, role_id);

const remove = (id) => teachersModel.deleteTeacher(id);

module.exports = { create, getAll, getById, update, remove };
