const express = require('express');
const router = express.Router();
const {
    createFranchise,
    getFranchises,
    getFranchiseById,
    updateFranchise,
    deleteFranchise,
    getFranchiseReport,
    getFranchiseDetailsReport
} = require('../controllers/franchisesController');

// CRUD
router.post('/', createFranchise);
router.get('/', getFranchises);
router.get('/:id', getFranchiseById);
router.put('/:id', updateFranchise);
router.delete('/:id', deleteFranchise);

// Reports
router.get('/reports/all', getFranchiseReport);
router.get('/reports/details', getFranchiseDetailsReport);

module.exports = router;
