const express = require('express');
const router = express.Router();
const attendanceSessionsController = require('../controllers/attendanceSessionsController');

router.post('/', attendanceSessionsController.createAttendanceSession);
router.get('/', attendanceSessionsController.getAttendanceSessions);
router.get('/:id', attendanceSessionsController.getAttendanceSessionById);
router.put('/:id', attendanceSessionsController.updateAttendanceSession);
router.delete('/:id', attendanceSessionsController.deleteAttendanceSession);

module.exports = router;
