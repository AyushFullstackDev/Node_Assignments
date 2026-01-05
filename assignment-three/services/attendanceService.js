const attendanceModel = require('../models/attendanceModel');

// Student Attendance
const markStudent = ({ attendance_session_id, student_id, status }) =>
  attendanceModel.markStudentAttendance(attendance_session_id, student_id, status);

// Get Student Attendance
const getStudentAttendance = () => attendanceModel.getStudentAttendance();


// Teacher Attendance
const markTeacher = ({ attendance_session_id, teacher_id, status }) =>
  attendanceModel.markTeacherAttendance(attendance_session_id, teacher_id, status);

// Staff Attendance
const markStaff = ({ attendance_session_id, staff_id, status }) =>
  attendanceModel.markStaffAttendance(attendance_session_id, staff_id, status);

// Get Student Attendance by session
const getStudentBySession = (attendance_session_id) =>
  attendanceModel.getStudentAttendanceBySession(attendance_session_id);

// Get teacher Attendance by session
const getTeacherBySession = (attendance_session_id) =>
  attendanceModel.getTeacherAttendanceBySession(attendance_session_id);

// Get staff Attendance by session
const getStaffBySession = (attendance_session_id) =>
  attendanceModel.getStaffAttendanceBySession(attendance_session_id);

module.exports = {
  markStudent, 
  markTeacher, 
  markStaff, 
  getStudentAttendance, 
  getStudentBySession,
  getTeacherBySession,
  getStaffBySession
};
