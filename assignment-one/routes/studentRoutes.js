const {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
  } = require('../studentController/studentControllers');

function studentRoutes(req, res) {
    if (req.url === '/students' && req.method === 'GET') {
        getStudents(req, res);
    }
    else if (req.url === '/student' && req.method === 'POST') {
        addStudent(req, res);
    }
    else if (req.url === '/student' && req.method === 'PUT') {
        updateStudent(req, res);
    }
    else if (req.url === '/student' && req.method === 'DELETE') {
        deleteStudent(req, res);
    }
}

module.exports = studentRoutes;