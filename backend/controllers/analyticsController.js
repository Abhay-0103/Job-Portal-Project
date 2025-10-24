const Job = require('../models/Job');
const Application = require('../models/Application');
const { count } = require('console');

const getTrend = (current, previous) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return Math.round(((current - previous) / previous) * 100);
};

// @desc   Get analytics overview for employer
exports.getEmployerAnalytics = async (req, res) => {
    try {
        if (req.user.role !== 'employer') {
            return res.status(403).json({ message: 'Only employers can access analytics' });
        }

        const companyId = req.user._id;

        const now = new Date();
        const last7Days = new Date(now);
        last7Days.setDate(now.getDate() - 7);
        const prev7Days = new Date(now);
        prev7Days.setDate(now.getDate() - 14);

        // === COUNTS ===
        const totalActiveJobs = await Job.countDocuments({ company: companyId, isClosed: false });
        const jobs = await Job.find({ company: companyId }).select("_id").lean();
        const jobIds = jobs.map(job => job._id);

        const totalApplications = await Application.countDocuments({ job: { $in: jobIds } });
        const totalHired = await Application.countDocuments({
            job: { $in: jobIds },
            status: 'Accepted',
        });

        // === TRENDS ===
        const activeJobsLast7 = await Job.countDocuments({
            company: companyId,
            createdAt: { $gte: last7Days, $lte: now },
        });

        const activeJobsPrev7 = await Job.countDocuments({
            company: companyId,
            createdAt: { $gte: prev7Days, $lte: last7Days },
        });

        const activeJobTrend = getTrend(activeJobsLast7, activeJobsPrev7);

        // Applications trend
        const applicationsLast7 = await Application.countDocuments({
            job: { $in: jobIds },
            createdAt: { $gte: last7Days, $lte: now },
        });

        const applicationsPrev7 = await Application.countDocuments({
            job: { $in: jobIds },
            createdAt: { $gte: prev7Days, $lt: last7Days },
        });

        const applicantTrend = getTrend(applicationsLast7, applicationsPrev7);

        // Hires trend
        const hiresLast7 = await Application.countDocuments({
            job: { $in: jobIds },
            status: 'Accepted',
            createdAt: { $gte: last7Days, $lte: now },
        });

        const hiresPrev7 = await Application.countDocuments({
            job: { $in: jobIds },
            status: 'Accepted',
            createdAt: { $gte: prev7Days, $lt: last7Days },
        });

        const hiredTrend = getTrend(hiresLast7, hiresPrev7);

        // === DATA ===
        const recentJobs = await Job.find({ company: companyId })
            .sort({ createdAt: -1 })
            .limit(5)
            .select('title location createdAt isClosed');

        const recentApplications = await Application.find({
            job: { $in: jobIds },
        })
            .sort({ createdAt: -1 })
            .limit(5)
            .populate('applicant', 'name email avatar')
            .populate('job', 'title');

        res.json({
            counts: {
                totalActiveJobs,
                totalApplications,
                totalHired,
                trends: {
                    activeJobs: activeJobTrend,
                    totalApplicants: applicantTrend,
                    totalHired: hiredTrend,
                }
            },
            data: {
                recentJobs,
                recentApplications,
            }
        });
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch analytics", error: err.message });
    }
};