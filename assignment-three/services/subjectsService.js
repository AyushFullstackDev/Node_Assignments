const subjectsModel = require('../models/subjectsModel');

const create = (name) => subjectsModel.createSubject(name);
const getAll = () => subjectsModel.getSubjects();
const getById = (id) => subjectsModel.getSubjectById(id);
const update = (id, name) => subjectsModel.updateSubject(id, name);
const remove = (id) => subjectsModel.deleteSubject(id);

module.exports = { create, getAll, getById, update, remove };
