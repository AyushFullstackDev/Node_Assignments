const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.post('/student', 
    attendanceController.markStudentAttendance
);
router.post('/teacher', attendanceController.markTeacherAttendance
);
router.post('/staff', attendanceController.markStaffAttendance
);

module.exports = router;
