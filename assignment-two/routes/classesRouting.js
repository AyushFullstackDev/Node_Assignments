const express = require('express');
const router = express.Router();
const {
    createClass,
    getClasses,
    getClassById,
    updateClass,
    deleteClass,
    getClassesReport
} = require('../controllers/classesController');

// CRUD
router.post('/', createClass);
router.get('/', getClasses);
router.get('/:id', getClassById);
router.put('/:id', updateClass);
router.delete('/:id', deleteClass);

// Reports
router.get('/reports/all', getClassesReport);

module.exports = router;
