const mongoose = require('mongoose');
const { totalmem } = require('os');

const analyticsSchema = new mongoose.Schema(
    {
        employer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        totalJobPosts: {
            type: Number,
            default: 0,
        },
        totalApplicationsReceived: {
            type: Number,
            default: 0,
        },
        totalHires: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Analytics', analyticsSchema);