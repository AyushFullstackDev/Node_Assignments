const queries = {
    attendance: {
        markStudent: `
        INSERT INTO student_attendance (attendance_session_id, student_id, status)
        VALUES ($1, $2, $3)
        ON CONFLICT (attendance_session_id, student_id)
        DO UPDATE SET status = EXCLUDED.status
        RETURNING *
      `,
        markTeacher: `
        INSERT INTO teacher_attendance (attendance_session_id, teacher_id, status)
        VALUES ($1, $2, $3)
        ON CONFLICT (attendance_session_id, teacher_id)
        DO UPDATE SET status = EXCLUDED.status
        RETURNING *
      `,
        markStaff: `
        INSERT INTO staff_attendance (attendance_session_id, staff_id, status)
        VALUES ($1, $2, $3)
        ON CONFLICT (attendance_session_id, staff_id)
        DO UPDATE SET status = EXCLUDED.status
        RETURNING *
      `,
        getAllStudents: `
      SELECT * FROM student_attendance
    `,
        getStudentBySession: `
      SELECT * FROM student_attendance
      WHERE attendance_session_id = $1
    `,

        getTeacherBySession: `
      SELECT * FROM teacher_attendance
      WHERE attendance_session_id = $1
    `,

        getStaffBySession: `
      SELECT * FROM staff_attendance
      WHERE attendance_session_id = $1
    `
    },

    attendanceSession: {
        create: `
        INSERT INTO attendance_sessions (institute_id, subject_id, date)
        VALUES ($1, $2, $3) RETURNING *
      `,
        getAll: `
        SELECT * FROM attendance_sessions ORDER BY date DESC
      `,
        getById: `
        SELECT * FROM attendance_sessions WHERE id=$1
      `,
        update: `
        UPDATE attendance_sessions
        SET institute_id=$1, subject_id=$2, date=$3
        WHERE id=$4 RETURNING *
      `,
        delete: `
        DELETE FROM attendance_sessions WHERE id=$1
      `
    },

    roles: {
        create: `INSERT INTO roles (name) VALUES ($1) RETURNING *`,
        getAll: `SELECT * FROM roles`,
        getById: `SELECT * FROM roles WHERE id=$1`,
        update: `UPDATE roles SET name=$1 WHERE id=$2 RETURNING *`,
        delete: `DELETE FROM roles WHERE id=$1`
    },

    staff: {
        create: `
        INSERT INTO staff (name, institute_id, role_id)
        VALUES ($1, $2, $3) RETURNING *
      `,
        getAll: `SELECT * FROM staff ORDER BY id ASC`,
        getById: `SELECT * FROM staff WHERE id=$1`,
        update: `
        UPDATE staff
        SET name=$1, institute_id=$2, role_id=$3
        WHERE id=$4 RETURNING *
      `,
        delete: `DELETE FROM staff WHERE id=$1`
    },

    subjects: {
        create: `INSERT INTO subjects (name) VALUES ($1) RETURNING *`,
        getAll: `SELECT * FROM subjects ORDER BY id ASC`,
        getById: `SELECT * FROM subjects WHERE id=$1`,
        update: `UPDATE subjects SET name=$1 WHERE id=$2 RETURNING *`,
        delete: `DELETE FROM subjects WHERE id=$1 RETURNING *`
    },

    teachers: {
        create: `
        INSERT INTO teachers (name, institute_id, subject_id, role_id)
        VALUES ($1, $2, $3, $4) RETURNING *
      `,
        getAll: `SELECT * FROM teachers ORDER BY id ASC`,
        getById: `SELECT * FROM teachers WHERE id=$1`,
        update: `
        UPDATE teachers
        SET name=$1, institute_id=$2, subject_id=$3, role_id=$4
        WHERE id=$5 RETURNING *
      `,
        delete: `DELETE FROM teachers WHERE id=$1`
    }
};

module.exports = queries;
