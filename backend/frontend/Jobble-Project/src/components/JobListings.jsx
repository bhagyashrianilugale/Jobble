// src/JobListings.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function JobListings(){
  const [jobListings, setJobListings] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
      axios.get("http://localhost:8080/joblistings").then((res)=>{
       setJobListings(res.data);
      }).catch((err)=>{
        console.log(err);
      });
     },[]);

  const handleClick = (jobId) => {
     console.log(jobId);
     navigate(`/joblisting/jobdetails/${jobId}`);
   };
    return (
     <div className="job-listings-container">
               <h2>Current Job Openings</h2>
               <div className="job-listings"> 
                {jobListings.map((job) => (
                   <div className="job-listing" key={job._id}>
                            <h3>{job.title}</h3>
                            <ul>
                              <li><b>Company</b>  : {job.company}</li>
                              <li><b>Location</b> : {job.location}</li>
                            </ul>
                            <button className= "btn" onClick={()=>handleClick(job._id)} >Details</button>
                            <button className="btn"><a href={`/joblisting/update/${job._id}`}>Update</a></button>                               
                      </div>
                   ))}
               </div>
           </div>
       );
};

export default JobListings;
