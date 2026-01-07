const express = require('express');
const router = express.Router();
const teachersController = require('../controllers/teachersController');

router.post('/', teachersController.createTeacher);
router.get('/', teachersController.getTeachers);
router.get('/:id', teachersController.getTeacherById);
router.put('/:id', teachersController.updateTeacher);
router.delete('/:id', teachersController.deleteTeacher);

module.exports = router;

