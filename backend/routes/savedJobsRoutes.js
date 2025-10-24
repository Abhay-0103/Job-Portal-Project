// Global imports
const express = require('express');
const router = express.Router();

// Local imports
const { Protect } = require('../middlewares/authMiddleware');
const {
    saveJob,
    unsaveJob,
    getMySavedJobs,
} = require('../controllers/savedJobController');

router.post('/:jobId', Protect, saveJob);
router.delete('/:jobId', Protect, unsaveJob);
router.get('/my', Protect, getMySavedJobs);

module.exports = router;