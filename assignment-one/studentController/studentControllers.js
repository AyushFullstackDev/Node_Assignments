const pool = require('../database');

// GET students
function getStudents(req, res) {
    pool.query('SELECT * FROM students', (err, result) => {
        if (err) {
            res.statusCode = 500;
            return res.end(JSON.stringify({ error: err.message }));

        }
        res.end(JSON.stringify(result.rows));
    });
}

// POST student
function addStudent(req, res) {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const data = JSON.parse(body);

        pool.query(
            `INSERT INTO students 
      (name, date_of_birth, phone_no, email, mother_name, father_name, address)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *`,
            [
                data.name,
                data.date_of_birth,
                data.phone_no,
                data.email,
                data.mother_name,
                data.father_name,
                data.address
            ],
            (err, result) => {
                if (err) {
                    res.statusCode = 500;
                    return res.end(JSON.stringify({ error: err.message }));
                }
                res.end(JSON.stringify(result.rows[0]));
                console.log("New student added!");
            }
        );
    });
}

// PUT student
function updateStudent(req, res) {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const data = JSON.parse(body);

        pool.query(
            `UPDATE students SET
              name=$1,
              date_of_birth=$2,
              phone_no=$3,
              email=$4,
              mother_name=$5,
              father_name=$6,
              address=$7
             WHERE id=$8
             RETURNING *`,
            [
                data.name,
                data.date_of_birth,
                data.phone_no,
                data.email,
                data.mother_name,
                data.father_name,
                data.address,
                data.id
            ],
            (err, result) => {
                if (err) {
                    res.statusCode = 500;
                    return res.end(JSON.stringify({ error: err.message }));
                }
                res.end(JSON.stringify(result.rows[0]));
                console.log("updated student details successfully!");
            }
           
        )
    })
}

// DELETE student
function deleteStudent(req, res) {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const data = JSON.parse(body);

        pool.query(
            'DELETE FROM students WHERE id=$1 RETURNING *',
            [data.id],
            (err, result) => {
                if (err) {
                    res.statusCode = 500;
                    return res.end(JSON.stringify({ error: err.message }));
                }

                res.end(JSON.stringify(result.rows[0]));
                console.log("Student deleted successfully!");
            }
        );
    });
}

module.exports = {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
};