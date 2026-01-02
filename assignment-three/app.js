const express = require('express');
const app = express();

// JSON parsing
app.use(express.json());

// Import route modules
const rolesRoutes = require('./routes/rolesRoutes');
const teachersRoutes = require('./routes/teachersRoutes');
const staffRoutes = require('./routes/staffRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

// Mount routes
app.use('/api/roles', rolesRoutes);
app.use('/api/teachers', teachersRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/attendance', attendanceRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
