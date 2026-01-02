const attendanceService = require('../services/attendanceService');

// Mark student attendance
const markStudentAttendance = async (req, res) => {
  const { attendance_session_id, student_id, status } = req.body;
  const result = await attendanceService.markStudent({ attendance_session_id, student_id, status });
  res.json({ success: true, data: result });
};

// Mark teacher attendance
const markTeacherAttendance = async (req, res) => {
  const { attendance_session_id, teacher_id, status } = req.body;
  const result = await attendanceService.markTeacher({ attendance_session_id, teacher_id, status });
  res.json({ success: true, data: result });
};

// Mark staff attendance
const markStaffAttendance = async (req, res) => {
  const { attendance_session_id, staff_id, status } = req.body;
  const result = await attendanceService.markStaff({ attendance_session_id, staff_id, status });
  res.json({ success: true, data: result });
};

module.exports = { markStudentAttendance, markTeacherAttendance, markStaffAttendance };
