const attendanceSessionsModel = require('../models/attendanceSessionsModel');

const create = (institute_id, subject_id, date) => {
    return attendanceSessionsModel.createAttendanceSession(institute_id, subject_id, date);
};


const getAll = () => attendanceSessionsModel.getAttendanceSessions();

const getById = (id) => attendanceSessionsModel.getAttendanceSessionById(id);

const update = (id, session_date, institute_id) =>
    attendanceSessionsModel.updateAttendanceSession(id, session_date, institute_id);

const remove = (id) => attendanceSessionsModel.deleteAttendanceSession(id);

module.exports = { create, getAll, getById, update, remove };
