const express = require('express');
const router = express.Router();
const {
    createInstitute,
    getInstitutes,
    getInstituteById,
    updateInstitute,
    deleteInstitute,
    getInstitutesReport
} = require('../controllers/instituteController');

// CRUD
router.post('/', createInstitute);
router.get('/', getInstitutes);
router.get('/:id', getInstituteById);
router.put('/:id', updateInstitute);
router.delete('/:id', deleteInstitute);

// Reports
router.get('/reports/all', getInstitutesReport);

module.exports = router;
