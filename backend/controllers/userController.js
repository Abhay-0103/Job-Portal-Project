const fs = require('fs');
const path = require('path');
const User = require('../models/User');

// @desc   Update user profile (name, avatar, company details)
exports.updateProfile = async (req, res) => {
    try {
        const { name, avatar, companyName, companyDescription, companyLogo, resume } = req.body;
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.name = name || user.name;
        user.avatar = avatar || user.avatar;
        user.resume = resume || user.resume;

        // If employer, update company details
        if (user.role === 'employer') {
            user.companyName = companyName || user.companyName;
            user.companyDescription = companyDescription || user.companyDescription;
            user.companyLogo = companyLogo || user.companyLogo;
        }
        await user.save();

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            companyName: user.companyName,
            companyDescription: user.companyDescription,
            companyLogo: user.companyLogo,
            resume: user.resume || "",
        });
    } catch (err) {
        console.error('Error updating profile:', err);
        res.status(500).json({ message: err.message });
    }
};

// @desc   Delete user resume
exports.deleteResume = async (req, res) => {
    try {
        const { resumeUrl } = req.body; // URL of the resume to be deleted

        if (!resumeUrl) {
            return res.status(400).json({ message: 'Resume URL is required' });
        }

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.role !== "jobSeeker") {
            return res.status(403).json({ message: 'Only jobSeekers can delete resumes' });
        }

        // Extract filename from URL
        const filename = resumeUrl?.split('/')?.pop();

        if (filename) {
            // construct file path
            const filePath = path.join(__dirname, '../uploads', filename);

            // Check if file exists and delete
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath); // delete file from server
                console.log(`Deleted file: ${filePath}`);
            } else {
                console.log(`File not found on server: ${filePath}`);
            }
        }

        // Set user's resume field to null or empty string
        user.resume = '';
        await user.save();

        res.json({ message: 'Resume deleted successfully', user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            resume: user.resume
        }});
    } catch (err) {
        console.error('Error deleting resume:', err);
        res.status(500).json({ message: err.message });
    }
};


// @desc   Get public user profile by ID
exports.getPublicProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
