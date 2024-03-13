// src/JobListing.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function JobDetails(){
  const navigate = useNavigate();
  const { jobId } = useParams();
  console.log(jobId);
  const [ jobDetails, setJobDetails ] = useState({});
  useEffect(()=>{
    try{
          async function fetchData(){
          const response = await axios.get(`http://localhost:8080/joblisting/jobdetails/${jobId}`)
          console.log("Job details received:", response.data);
          setJobDetails(response.data);
        }
        fetchData();
       }
    catch(err){
      console.log("Error fetching job details:", err);
  }
   //   const jobIdAsNumber = Number(jobId);
      
  }, [jobId]);
  const handleClick = (jobId) => {
    console.log(jobId);
    navigate(`/joblisting/applyfor/${jobId}`);
  };

  return (
   <div>
      <div className="jobdetails-component-img"></div>
       { 
         Object.keys(jobDetails).length === 0?(<p>Loading...</p>):
           <div className="jobListing-Details">
            <h2>{jobDetails.title}</h2>
             <ul>
                <li><b>Company</b>     : {jobDetails.company}</li>
                <li><b>Location</b>    : {jobDetails.location}</li>
                <li><b>Salary</b>      : <b>&#8377;</b> {jobDetails.salary.toLocaleString("en-IN")}</li>
                <li><b>Description</b> : {jobDetails.description}</li>
                <li><b>JobType</b>     : {jobDetails.jobType}</li>
                <li><b>Experience</b>  : {jobDetails.experience}Years</li>
                <li><b>JobOverview</b> : {jobDetails.jobOverview}</li> 
                <li><b>How to apply</b>: {jobDetails.howToApply}</li>
             </ul>
             <button className="apply-btn" onClick={()=>{handleClick(jobDetails._id)}} >Apply</button>
         </div>
         }
  </div>
  );
};

export default JobDetails;
