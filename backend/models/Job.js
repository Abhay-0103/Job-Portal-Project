const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    category: {
        type: String,
    },
    type: {
        type: String,
        enum: ["Remote", "Full-time", "Part-time","Full-Time", "Time", "Contract", "Internship"],
        required: true,
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }, // Employer reference

    salaryMin: {
        type: Number,
    },
    salaryMax: {
        type: Number,
    },
    isClosed: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('Job', jobSchema);