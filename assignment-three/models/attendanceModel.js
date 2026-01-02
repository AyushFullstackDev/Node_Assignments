// models/attendanceModel.js
// Handles DB queries for marking attendance

const pool = require('../database');

// Mark student attendance (insert or update)
const markStudentAttendance = async (attendance_session_id, student_id, status) => {
  const res = await pool.query(
    `INSERT INTO student_attendance (attendance_session_id, student_id, status)
     VALUES ($1, $2, $3)
     ON CONFLICT (attendance_session_id, student_id)
     DO UPDATE SET status = EXCLUDED.status
     RETURNING *`,
    [attendance_session_id, student_id, status]
  );
  return res.rows[0];
};

// Similarly for teacher attendance
const markTeacherAttendance = async (attendance_session_id, teacher_id, status) => {
  const res = await pool.query(
    `INSERT INTO teacher_attendance (attendance_session_id, teacher_id, status)
     VALUES ($1, $2, $3)
     ON CONFLICT (attendance_session_id, teacher_id)
     DO UPDATE SET status = EXCLUDED.status
     RETURNING *`,
    [attendance_session_id, teacher_id, status]
  );
  return res.rows[0];
};

// Similarly for staff attendance
const markStaffAttendance = async (attendance_session_id, staff_id, status) => {
  const res = await pool.query(
    `INSERT INTO staff_attendance (attendance_session_id, staff_id, status)
     VALUES ($1, $2, $3)
     ON CONFLICT (attendance_session_id, staff_id)
     DO UPDATE SET status = EXCLUDED.status
     RETURNING *`,
    [attendance_session_id, staff_id, status]
  );
  return res.rows[0];
};

module.exports = { 
  markStudentAttendance, 
  markTeacherAttendance, 
  markStaffAttendance 
};
