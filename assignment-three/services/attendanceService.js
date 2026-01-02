const attendanceModel = require('../models/attendanceModel');

// Student attendance
const markStudent = (attendance_session_id, student_id, status) =>
  attendanceModel.markStudentAttendance(attendance_session_id, student_id, status);

// Teacher attendance
const markTeacher = (attendance_session_id, teacher_id, status) =>
  attendanceModel.markTeacherAttendance(attendance_session_id, teacher_id, status);

// Staff attendance
const markStaff = (attendance_session_id, staff_id, status) =>
  attendanceModel.markStaffAttendance(attendance_session_id, staff_id, status);

module.exports = { markStudent, markTeacher, markStaff };
