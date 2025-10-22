const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
    {
        job: {
            type: mongoose.Schema.Types.ObjectId,   
            ref: 'Job',
            required: true,
        },
        applicant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',    
            required: true,
        },
        resume: {
            type: String,
        }, // URL or path to the resume
status: {
            type: String,
            enum: ['Applied', 'Under Review', 'Rejected', 'Accepted'],
            default: 'Applied',
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Application', applicationSchema);