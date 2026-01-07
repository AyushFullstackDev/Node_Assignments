const express = require('express');
const router = express.Router();
const {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
    getClassStudentCount
} = require('../controllers/studentController');

// CRUD
router.post('/', createStudent);
router.get('/', getStudents);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

// Reports
router.get('/reports/classes', getClassStudentCount);

module.exports = router;
