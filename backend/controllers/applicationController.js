const Application = require("../models/Application");
const Job = require("../models/Job");

// @desc   Apply for a job
exports.applyToJob = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};

// @desc   Get logged in user's applications
exports.getMyApplications = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};

// @desc   Get all applicants for job (Employer only)
exports.getApplicantsForJob = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};

// @desc   Get application by ID (Jobseeker or Employer)
exports.getApplicationById = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};

// @desc   Update application status (Employer only)
exports.updateStatus = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};