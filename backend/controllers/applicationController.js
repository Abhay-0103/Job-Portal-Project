const Application = require("../models/Application");
const Job = require("../models/Job");

// @desc   Apply for a job
exports.applyToJob = async (req, res) => {
    try {
        if (req.user.role !== 'jobseeker') {
            return res.status(403).json({ message: 'Only jobseekers can apply for jobs' });
        }

        const existing = await Application.findOne({
            job: req.params.jobId,
            applicant: req.user._id,
        });

        if (existing) {
            return res.status(400).json({ message: 'You have already applied for this job' });
        }

        const application = await Application.create({
            job: req.params.jobId,
            applicant: req.user._id,
            resume: req.user.resume, // assuming resume is stored in user profile 
        });

        res.status(201).json(application);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};

// @desc   Get logged in user's applications
exports.getMyApplications = async (req, res) => {
    try {
        const apps = await Application.find({ applicant: req.user._id })
            .populate('job', 'title company location type')
            .sort({ createdAt: -1 });

        res.json(apps);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};

// @desc   Get all applicants for job (Employer only)
exports.getApplicantsForJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.jobId);
       
        if  (!job || job.company.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to view application' });
        }

        const applications = await Application.find({ job: req.params.jobId })
        .populate("job", "title location category type")
        .populate("applicant", "name email avatar resume")

        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};

// @desc   Get application by ID (Jobseeker or Employer)
exports.getApplicationById = async (req, res) => {
    try {
        const app = await Application.findById(req.params.id)
        .populate("job", "title")
        .populate("applicant", "name email avatar resume");

        if (!app) return res.status(404).json({ message: 'Application not found', id: req.params.id });

        const isOwner = 
        app.applicant._id.toString() === req.user._id.toString() ||
        app.job.company.toString() === req.user._id.toString();

        if (!isOwner) {
            return res.status(403).json({ message: 'Not authorized to view this application' });
        }

        res.json(app);
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