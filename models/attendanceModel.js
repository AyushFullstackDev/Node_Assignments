const pool = require('../database');
const queries = require('../queries/queries');

// Mark / Update Student Attendance
const markStudentAttendance = async (attendance_session_id, student_id, status) => {
  const res = await pool.query(
    queries.attendance.markStudent,
    [attendance_session_id, student_id, status]
  );
  return res.rows[0];
};

// Get All Student Attendance
const getStudentAttendance = async () => {
  const res = await pool.query(
    queries.attendance.getAllStudents
  );
  return res.rows;
};

// Mark / Update Teacher Attendance
const markTeacherAttendance = async (attendance_session_id, teacher_id, status) => {
  const res = await pool.query(
    queries.attendance.markTeacher,
    [attendance_session_id, teacher_id, status]
  );
  return res.rows[0];
};

// Mark / Update Staff Attendance
const markStaffAttendance = async (attendance_session_id, staff_id, status) => {
  const res = await pool.query(
    queries.attendance.markStaff,
    [attendance_session_id, staff_id, status]
  );
  return res.rows[0];
};
// Get Student Attendance by Session
const getStudentAttendanceBySession = async (attendance_session_id) => {
  const res = await pool.query(
    queries.attendance.getStudentBySession,
    [attendance_session_id]
  );
  return res.rows;
};

// Get Teacher Attendance by Session
const getTeacherAttendanceBySession = async (attendance_session_id) => {
  const res = await pool.query(
    queries.attendance.getTeacherBySession,
    [attendance_session_id]
  );
  return res.rows;
};

// Get Staff Attendance by Session
const getStaffAttendanceBySession = async (attendance_session_id) => {
  const res = await pool.query(
    queries.attendance.getStaffBySession,
    [attendance_session_id]
  );
  return res.rows;
};

module.exports = {
  markStudentAttendance,
  getStudentAttendance,
  markTeacherAttendance,
  markStaffAttendance,
  getStudentAttendanceBySession,
  getTeacherAttendanceBySession,
  getStaffAttendanceBySession
};
