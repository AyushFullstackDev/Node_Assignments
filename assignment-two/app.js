const express = require('express');
const bodyParser = require('body-parser');

// Import route files
const classesRoutes = require('./routes/classesRouting');
const coursesRoutes = require('./routes/coursesRouting');
const institutesRoutes = require('./routes/instituteRouting');
const studentsRoutes = require('./routes/studentRouting');
const franchisesRoutes = require('./routes/franchisesRouting');

const app = express();
const PORT = 3011;

// Middleware to parse JSON
app.use(bodyParser.json());

// Routes
app.use('/classes', classesRoutes);
app.use('/courses', coursesRoutes);
app.use('/institutes', institutesRoutes);
app.use('/students', studentsRoutes);
app.use('/franchises', franchisesRoutes);

// 404 handler for unknown routes
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
