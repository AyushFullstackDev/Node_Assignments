const pool = require('../database');

// CREATE
function createStudent(req, res) {
    const data = req.body;
    pool.query(
        'INSERT INTO students_list (name, email, institute_id, course_id, class_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [data.name, data.email, data.institute_id, data.course_id, data.class_id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// GET ALL
function getStudents(req, res) {
    pool.query(
        'SELECT s.id, s.name, s.email, i.name AS institute_name, c.name AS course_name, cl.name AS class_name ' +
        'FROM students_list s ' +
        'JOIN institutes i ON s.institute_id = i.id ' +
        'JOIN courses c ON s.course_id = c.id ' +
        'JOIN classes cl ON s.class_id = cl.id',
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows);
        }
    );
}

// GET BY ID
function getStudentById(req, res) {
    const id = req.params.id;
    pool.query(
        'SELECT s.*, i.name AS institute_name, c.name AS course_name, cl.name AS class_name ' +
        'FROM students_list s ' +
        'JOIN institutes i ON s.institute_id = i.id ' +
        'JOIN courses c ON s.course_id = c.id ' +
        'JOIN classes cl ON s.class_id = cl.id ' +
        'WHERE s.id=$1',
        [id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// UPDATE
function updateStudent(req, res) {
    const id = req.params.id;
    const data = req.body;
    pool.query(
        'UPDATE students_list SET name=$1, email=$2, course_id=$3, class_id=$4 WHERE id=$5 RETURNING *',
        [data.name, data.email, data.course_id, data.class_id, id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// DELETE
function deleteStudent(req, res) {
    const id = req.params.id;
    pool.query(
        'DELETE FROM students_list WHERE id=$1',
        [id],
        function(err) {
            if (err) res.end(err.message);
            else res.json({ message: 'Student deleted' });
        }
    );
}

// REPORT: CLASS WISE STUDENT COUNT
function getClassStudentCount(req, res) {
    pool.query(
        'SELECT cl.id, cl.name AS class_name, COUNT(s.id) AS total_students ' +
        'FROM classes cl ' +
        'LEFT JOIN students_list s ON s.class_id = cl.id ' +
        'GROUP BY cl.id',
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows);
        }
    );
}

module.exports = {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
    getClassStudentCount
};
