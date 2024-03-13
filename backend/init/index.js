const mongoose = require("mongoose");
const initData = require("./data.js");
const JobListing = require("../models/joblisting");


const MONGO_URL = "mongodb://127.0.0.1:27017/Job-board";

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>{
    console.log("Database successfully connected");
}).catch((err)=>{
    console.log(err);
});

const initDB = async() =>{
    await JobListing.deleteMany({});
    await JobListing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();