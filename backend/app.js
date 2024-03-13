
if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const morgan = require("morgan");
var cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const jobRoutes = require("./routes/joblisting");
const userRoutes = require("./routes/user");
const applicationRoutes = require("./routes/application");
const employerRoutes = require("./routes/employer");
const candidateRoutes = require("./routes/candidate");
const User = require("./models/user");
const JobListing = require("./models/joblisting");
const Application = require("./models/application");
const Employer = require("./models/employer");
const Candidate = require("./models/candidate");
const { AsyncLocalStorage } = require('async_hooks');
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const multer = require("multer");
const upload = multer({dest:"/uploads"});

//DATABASE CONNECTION
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


//MIDDLEWARE

// app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(session({ secret: process.env.SECRETE, 
                  resave: false, 
                  saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy( User.authenticate()));


// PASSPORT MIDDLEWARE

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//PORT

let port = 8080;
   app.listen( port, ()=>{
        console.log(`server is listening to port ${port}`);
    });
   app.get("/",(req, res)=>{
        res.send("Hi i am root");
    });



  
//Job-Listings


//Index Route
app.get("/joblistings", wrapAsync(async(req,res)=>{
           const getAllJobs = await JobListing.find({});
           res.send(getAllJobs);
    }));

//Get Listing by title
app.get("/joblistings/title", async(req, res)=>{
        const getAllJobs = await JobListing
})

//Show Route
app.get("/joblisting/jobdetails/:jobId", wrapAsync(async(req, res)=>{
           const {jobId} = req.params
           console.log(jobId);
           const isvalidId = mongoose.Types.ObjectId.isValid(jobId);
           if(isvalidId){
           console.log(jobId);
           const getJobById = await JobListing.findById(jobId);
           res.send(getJobById);
           } else{
           console.log("Invalid ObjectId format for _id field.");
           } 
}));

//create Route
app.post("/joblisting/postjob", 
     
wrapAsync(async (req, res, next)=>{
          const {title, 
                 company, 
                 location, 
                 salary, 
                 description,
                 jobType, 
                 experience, 
                 jobOverview, 
                 howToApply} = await req.body;
                const newJobListing = new JobListing(
                                      { 
                                       title, 
                                       company, 
                                       location, 
                                       salary, 
                                       description,
                                       jobType, 
                                       experience, 
                                       jobOverview, 
                                       howToApply
                                      });
              const savedJobListing = await newJobListing.save(); 
              console.log(savedJobListing);
              res.send("Joblisting Was Saved");
  }));
     
//Update Route
app.get("/joblisting/update/:jobId", 
           async(req, res)=>{
           const {jobId} = req.params;
           console.log(jobId);
           const isvalidId = mongoose.Types.ObjectId.isValid(jobId);
           console.log(isvalidId);
           if(isvalidId){
               console.log(jobId);
               const getJobById = await JobListing.findById(jobId);
               res.send(getJobById);
           } else{
           console.log("Invalid ObjectId format for _id field.");
          } 
});

app.put("/joblisting/:jobId/update", async (req, res) => {
    let { jobId } = req.params;
    let joblisting = await JobListing.findByIdAndUpdate(jobId, req.body);
    console.log(joblisting);
    res.send("Joblisting was updated");
  });
//Application Routes

app.post("/joblisting/applyfor",
  upload.single("resumeUrl"),
  async (req, res)=>{
  try{
    const { email, coverLetter } = req.body;
    const resumeUrl = req.file;
    const newApplication = new Application({ email, resumeUrl, coverLetter });
    const savedApplication = newApplication.save();
    console.log(savedApplication);
  }catch(err){
    console.log(err);
  }
   
//    const savedApplication = await newApplication.save();
//    console.log(savedApplication);

  
//   const newApplication = new Application({email, resumeUrl, coverLetter});
//   const savedApplication = await newApplication.save();
//   console.log(savedApplication);
//   res.send(req.file);
//   res.send("Application was successfully saved!");
});


// User Routes

app.post("/signupnuser", async(req, res)=>{
    const {username, 
           email, 
           password, 
           usertype} = req.body;
    const newUser = new User({username, 
                              email, 
                              password, 
                              usertype});
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.send();
});

// Employee Routes
app.post("/jobble/employer", async(req, res)=>{
    const{companyName,
          location,
          contactEmail, 
          password } = req.body;
    const newEmployer = new Employer({ companyName, 
                                       location, 
                                       contactEmail, 
                                       password });
    const savedEmployer = await newEmployer.save()
    .then((result)=>{
        console.log(result);
        res.status(200).send(savedEmployer);
    }).catch((error)=>{
        console.log(error);
        res.status(500).send("Error saving candidate");
    });
});


//Candidate Routes
app.post("/jobble/candidate", async(req, res)=>{
    const {fullName, 
           email, 
           skills, 
           education, 
           experience, 
           password } = await req.body;
    const newCandidate = new Candidate({fullName,
                                        email, 
                                        skills, 
                                        education, 
                                        experience, 
                                        password
                                       });
    const savedCandidate = newCandidate.save()
    .then((result)=>{
        console.log(result);
        res.status(200).send(savedCandidate);
    }).catch((error)=>{
        console.log(error);
        res.status(500).send("Error saving candidate");
    });
});

app.all("*",(req, res, next)=>{
    next(new ExpressError(404, "page Not Found!"));
});


app.use((err,req,res,next)=>{
    let{ statusCode=500, message="Something wents wrong!"}= err;
    res.status(statusCode).send(message);
});

   
    
    

    