const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const employerSchema = new Schema({
       companyName: { 
          type: String,
          required: true 
          },

       location: {
         type: String, 
         required: true 
         },

       contactEmail: { 
        type: String, 
        required: true, 
        unique: true 
        },

        password: { 
        type: String, 
        required: true 
         }
        
    });

const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;
