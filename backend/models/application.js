const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const applicationSchema = new Schema({
     email: {
         type: String,
         required: true,
    },

    resumeUrl: {
       type: String,
    },

    coverLetter: {
       type: String,
    },

    appliedAt: {
       type: Date,
       default: Date.now,
    },
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
