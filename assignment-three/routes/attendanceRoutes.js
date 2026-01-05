const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.post('/student', attendanceController.markStudentAttendance);
router.get('/student-attendance', attendanceController.getStudentAttendance);
router.post('/teacher', attendanceController.markTeacherAttendance);
router.post('/staff', attendanceController.markStaffAttendance);
router.get('/student/session/:sessionId', attendanceController.getStudentBySession);
router.get('/teacher/session/:sessionId', attendanceController.getTeacherBySession);
router.get('/staff/session/:sessionId', attendanceController.getStaffBySession);

module.exports = router;
