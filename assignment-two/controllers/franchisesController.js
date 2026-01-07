const pool = require('../database');

// CREATE
function createFranchise(req, res) {
    const data = req.body;
    pool.query(
        'INSERT INTO franchises (name) VALUES ($1) RETURNING *',
        [data.name],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// GET ALL
function getFranchises(req, res) {
    pool.query(
        'SELECT * FROM franchises',
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows);
        }
    );
}

// GET BY ID
function getFranchiseById(req, res) {
    const id = req.params.id;
    pool.query(
        'SELECT * FROM franchises WHERE id=$1',
        [id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// UPDATE
function updateFranchise(req, res) {
    const id = req.params.id;
    const data = req.body;
    pool.query(
        'UPDATE franchises SET name=$1 WHERE id=$2 RETURNING *',
        [data.name, id],
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows[0]);
        }
    );
}

// DELETE
function deleteFranchise(req, res) {
    const id = req.params.id;
    pool.query(
        'DELETE FROM franchises WHERE id=$1',
        [id],
        function(err) {
            if (err) res.end(err.message);
            else res.json({ message: 'Franchise deleted' });
        }
    );
}

// REPORT: Franchise + Institute Count
function getFranchiseReport(req, res) {
    pool.query(
        'SELECT f.id, f.name, COUNT(i.id) AS total_institutes ' +
        'FROM franchises f ' +
        'LEFT JOIN institutes i ON i.franchises_id = f.id ' +
        'GROUP BY f.id',
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows);
        }
    );
}

// REPORT: Franchise → Institute → Student Count
function getFranchiseDetailsReport(req, res) {
    pool.query(
        'SELECT f.name AS franchise, ' +
        'COUNT(DISTINCT i.id) AS institutes, ' +
        'COUNT(s.id) AS students ' +
        'FROM franchises f ' +
        'LEFT JOIN institutes i ON i.franchises_id = f.id ' +
        'LEFT JOIN courses c ON c.institutes_id = i.id ' +
        'LEFT JOIN classes cl ON cl.course_id = c.id ' +
        'LEFT JOIN students_list s ON s.class_id = cl.id ' +
        'GROUP BY f.id',
        function(err, result) {
            if (err) res.end(err.message);
            else res.json(result.rows);
        }
    );
}

module.exports = {
    createFranchise,
    getFranchises,
    getFranchiseById,
    updateFranchise,
    deleteFranchise,
    getFranchiseReport,
    getFranchiseDetailsReport
};
