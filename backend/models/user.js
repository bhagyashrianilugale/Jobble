const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passport = require("passport");
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({
        username: { 
              type: String, 
              required: true, 
              },
        email: { 
            type: String, 
            required: true, 
            unique: true 
        },
         password: { 
            type: String, 
            required: true 
        },
         usertype: { 
            type: String, 
            enum: ['candidate', 'employer'], 
            required: true 
        }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);


module.exports = User;


