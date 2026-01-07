const attendanceSessionsService = require('../services/attendanceSessionsService');

const createAttendanceSession = async (req, res) => {
    const { institute_id, subject_id, date } = req.body;

    console.log('Received body:', req.body);  
    if (!institute_id || !subject_id || !date) {
        return res.status(400).json({ success: false, message: 'institute_id, subject_id, and date are required' });
    }

    try {
        const result = await attendanceSessionsService.create(institute_id, subject_id, date);
        res.status(201).json({ success: true, data: result });
    } catch (err) {
        console.error('DB Error:', err);
        res.status(500).json({ success: false, message: err.message });
    }
};


const getAttendanceSessions = async (req, res) => {
    const result = await attendanceSessionsService.getAll();
    res.json({ success: true, data: result });
};

const getAttendanceSessionById = async (req, res) => {
    const result = await attendanceSessionsService.getById(req.params.id);
    res.json({ success: true, data: result });
};

const updateAttendanceSession = async (req, res) => {
    const { session_date, institute_id } = req.body;
    const result = await attendanceSessionsService.update(req.params.id, session_date, institute_id);
    res.json({ success: true, data: result });
};

const deleteAttendanceSession = async (req, res) => {
    const result = await attendanceSessionsService.remove(req.params.id);
    res.json({ success: true, data: result });
};

module.exports = {
    createAttendanceSession,
    getAttendanceSessions,
    getAttendanceSessionById,
    updateAttendanceSession,
    deleteAttendanceSession
};
