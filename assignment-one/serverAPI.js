const http = require('http');
const studentRoutes = require('./routes/studentRoutes');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  studentRoutes(req, res);
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});