const pool = require('../database');

// CREATE
function createInstitute(req, res) {
    const data = req.body;
    pool.query(
        'INSERT INTO institutes (name, city, franchises_id) VALUES ($1, $2, $3) RETURNING *',
        [data.name, data.city, data.franchises_id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// GET ALL
function getInstitutes(req, res) {
    pool.query(
        'SELECT * FROM institutes',
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows);
        }
    );
}

// GET BY ID
function getInstituteById(req, res) {
    const id = req.params.id;
    pool.query(
        'SELECT * FROM institutes WHERE id = $1',
        [id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// UPDATE
function updateInstitute(req, res) {
    const id = req.params.id;
    const data = req.body;
    pool.query(
        'UPDATE institutes SET name=$1, city=$2 WHERE id=$3 RETURNING *',
        [data.name, data.city, id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// DELETE
function deleteInstitute(req, res) {
    const id = req.params.id;
    pool.query(
        'DELETE FROM institutes WHERE id=$1',
        [id],
        function(err) {
            if (err) res.end(err.message);
            else res.json({ message: 'Institute deleted' });
        }
    );
}

// REPORT: Institutes + Student Count
function getInstitutesReport(req, res) {
    pool.query(
        'SELECT i.id, i.name, i.city, COUNT(s.id) AS total_students ' +
        'FROM institutes i ' +
        'LEFT JOIN students_list s ON s.institute_id = i.id ' +
        'GROUP BY i.id',
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows);
        }
    );
}

module.exports = {
    createInstitute,
    getInstitutes,
    getInstituteById,
    updateInstitute,
    deleteInstitute,
    getInstitutesReport
};
