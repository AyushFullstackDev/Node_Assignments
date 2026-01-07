const attendanceService = require('../services/attendanceService');

const markStudentAttendance = async (req, res) => {
  const { attendance_session_id, student_id, status } = req.body;
  if (!attendance_session_id || !student_id || !status) {
    return res.status(400).json({ success: false, message: 'attendance_session_id, student_id, and status are required' });
  }
  try {
    const result = await attendanceService.markStudent({ attendance_session_id, student_id, status });
    res.json({ success: true, data: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get Student Attendance

const getStudentAttendance = async () => attendanceService.getStudentAttendance();


// Mark Teacher Attendance
const markTeacherAttendance = async (req, res) => {
  if (!req.body.attendance_session_id || !req.body.teacher_id || !req.body.status) {
    return res.status(400).json({ success: false, message: 'attendance_session_id, teacher_id, and status are required' });
  }
  try {
    const { attendance_session_id, teacher_id, status } = req.body;
    const result = await attendanceService.markTeacher({ attendance_session_id, teacher_id, status });
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Mark Staff Attendance
const markStaffAttendance = async (req, res) => {
  if (!req.body.attendance_session_id || !req.body.staff_id || !req.body.status) {
    return res.status(400).json({ success: false, message: 'attendance_session_id, staff_id, and status are required' });
  }
  try {
    const { attendance_session_id, staff_id, status } = req.body;
    const result = await attendanceService.markStaff({ attendance_session_id, staff_id, status });
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Get Student Attendance by Session
const getStudentBySession = async (req, res) => {
  try {
    const result = await attendanceService.getStudentBySession(req.params.sessionId);
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get Teacher Attendance by Session
const getTeacherBySession = async (req, res) => {
  try {
    const result = await attendanceService.getTeacherBySession(req.params.sessionId);
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get Staff Attendance by Session
const getStaffBySession = async (req, res) => {
  try {
    const result = await attendanceService.getStaffBySession(req.params.sessionId);
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  markStudentAttendance,
  markTeacherAttendance,
  markStaffAttendance,
  getStudentAttendance,
  getStudentBySession,
  getTeacherBySession,
  getStaffBySession
};
