const express = require('express');
const routeManager = require('./routeManager');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routeManager(app);

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(3100, () => console.log('Server running on port 3100'));