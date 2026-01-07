const pool = require('../database');

// CREATE
function createClass(req, res) {
    const data = req.body;
    pool.query(
        'INSERT INTO classes (name, course_id, institute_id) VALUES ($1, $2, $3) RETURNING *',
        [data.name, data.course_id, data.institute_id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// GET ALL
function getClasses(req, res) {
    pool.query(
        'SELECT cl.id, cl.name AS class_name, c.name AS course_name, i.name AS institute_name ' +
        'FROM classes cl ' +
        'JOIN courses c ON cl.course_id = c.id ' +
        'JOIN institutes i ON cl.institute_id = i.id',
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows);
        }
    );
}

// GET BY ID
function getClassById(req, res) {
    const id = req.params.id;
    pool.query(
        'SELECT cl.*, c.name AS course_name, i.name AS institute_name ' +
        'FROM classes cl ' +
        'JOIN courses c ON cl.course_id = c.id ' +
        'JOIN institutes i ON cl.institute_id = i.id ' +
        'WHERE cl.id=$1',
        [id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// UPDATE
function updateClass(req, res) {
    const id = req.params.id;
    const data = req.body;
    pool.query(
        'UPDATE classes SET name=$1 WHERE id=$2 RETURNING *',
        [data.name, id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// DELETE
function deleteClass(req, res) {
    const id = req.params.id;
    pool.query(
        'DELETE FROM classes WHERE id=$1',
        [id],
        function(err) {
            if (err) res.end(err.message);
            else res.json({ message: 'Class deleted' });
        }
    );
}

// REPORT
function getClassesReport(req, res) {
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
    createClass,
    getClasses,
    getClassById,
    updateClass,
    deleteClass,
    getClassesReport
};
