const express = require('express');
const app = express();
app.use(express.json());

function routeManager(app) {
    // Import route modules
    const rolesRoutes = require('./routes/rolesRoutes');
    const teachersRoutes = require('./routes/teachersRoutes');
    const staffRoutes = require('./routes/staffRoutes');
    const attendanceRoutes = require('./routes/attendanceRoutes');
    const getStudentAttendance = require('./routes/attendanceRoutes');
    const subjectsRoutes = require('./routes/subjectsRoutes');
    const attendanceSessionsRoutes = require('./routes/attendanceSessionsRoutes');


    // Mount routes
    app.use('/api/roles', rolesRoutes);
    app.use('/api/teachers', teachersRoutes);
    app.use('/api/staff', staffRoutes);
    app.use('/api/attendance', attendanceRoutes);
    app.use('/api/get-student-attendance', getStudentAttendance);
    app.use('/api/attendance-sessions', attendanceSessionsRoutes);
    app.use('/api/subjects', subjectsRoutes);

}

module.exports = routeManager;