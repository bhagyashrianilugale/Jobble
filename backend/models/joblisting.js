const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobListingSchema = new Schema({
    title: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    location: String,
    salary: {
      type: Number,
      default: null,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    jobType:{
      type: String,
      required: true,
    },
    
    experience: {
      type: Number,
      default:0,
      required: true
    },
    
   jobOverview: {
      type: String,
      required: true,
    },

    howToApply: {
      type: String,
      required: true
    },

    application: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Application'
      }
    ],

    postedDate: {
      type: Date,
      default: Date.now,
    },
  });
  
  const JobListing = mongoose.model("JobListing", jobListingSchema);
  
  module.exports = JobListing;