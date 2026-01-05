const pool = require('../database');
const queries = require('../queries/queries');

// Create Attendance Session
const createAttendanceSession = async (institute_id, subject_id, date) => {
  const res = await pool.query(
    queries.attendanceSession.create,
    [institute_id, subject_id, date]
  );
  return res.rows[0];
};

// Get all Attendance Sessions
const getAttendanceSessions = async () => {
  const res = await pool.query(
    queries.attendanceSession.getAll
  );
  return res.rows;
};

// Get Attendance Session by ID
const getAttendanceSessionById = async (id) => {
  const res = await pool.query(
    queries.attendanceSession.getById,
    [id]
  );
  return res.rows[0];
};

// Update Attendance Session
const updateAttendanceSession = async (id, institute_id, subject_id, date) => {
  const res = await pool.query(
    queries.attendanceSession.update,
    [institute_id, subject_id, date, id]
  );
  return res.rows[0];
};

// Delete Attendance Session
const deleteAttendanceSession = async (id) => {
  await pool.query(
    queries.attendanceSession.delete,
    [id]
  );
  return { message: 'Attendance session deleted successfully' };
};

module.exports = {
  createAttendanceSession,
  getAttendanceSessions,
  getAttendanceSessionById,
  updateAttendanceSession,
  deleteAttendanceSession
};
