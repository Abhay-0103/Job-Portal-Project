// global imports
const express = require("express");
const router = express.Router();

// local imports
const { protect } = require("../middlewares/authMiddleware");
const { getEmployerAnalytics } = require("../controllers/analyticsController");

router.get("/overview", protect, getEmployerAnalytics);

module.exports = router;