const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
        fullName: { 
            type: String, 
            required: true
         },
        email: {
           type: String, 
           required: true, 
           unique: true 
        },

        skills: [{ 
            type: String 
        }],

        education: { 
            type: String
        },

        experience:{
          type: String
        },
         
        password: { 
          type: String, 
          required: true 
        }
});

  const Candidate = mongoose.model('Candidate', candidateSchema);

  module.exports = Candidate;
