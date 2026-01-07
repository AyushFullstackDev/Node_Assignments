const pool = require('../database');

// CREATE
function createCourse(req, res) {
    const data = req.body;
    pool.query(
        'INSERT INTO courses (name, institutes_id) VALUES ($1, $2) RETURNING *',
        [data.name, data.institutes_id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// GET ALL
function getCourses(req, res) {
    pool.query(
        'SELECT c.id, c.name, i.name AS institute_name ' +
        'FROM courses c ' +
        'JOIN institutes i ON c.institutes_id = i.id',
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows);
        }
    );
}

// GET BY ID
function getCourseById(req, res) {
    const id = req.params.id;
    pool.query(
        'SELECT * FROM courses WHERE id = $1',
        [id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// UPDATE
function updateCourse(req, res) {
    const id = req.params.id;
    const data = req.body;
    pool.query(
        'UPDATE courses SET name=$1 WHERE id=$2 RETURNING *',
        [data.name, id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// DELETE
function deleteCourse(req, res) {
    const id = req.params.id;
    pool.query(
        'DELETE FROM courses WHERE id=$1',
        [id],
        function(err) {
            if (err) res.end(err.message);
            else res.json({ message: 'Course deleted' });
        }
    );
}

// REPORT: Courses + Students Count
function getCoursesReport(req, res) {
    pool.query(
        'SELECT c.id, c.name, COUNT(s.id) AS total_students ' +
        'FROM courses c ' +
        'LEFT JOIN students_list s ON s.course_id = c.id ' +
        'GROUP BY c.id',
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows);
        }
    );
}

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
    getCoursesReport
};
