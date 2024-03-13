import React, { useState } from 'react';
import {useFormik} from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function JobNew(){
   const navigate = useNavigate();
   const initialValues = {
              title: '',
              company: '',
              location: '',
              salary: '',
              description: '',
              jobType: '',
              experience: '',
              jobOverview: '',
              howToApply: ''
};

   const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
         initialValues: initialValues,
         onSubmit: async (values) =>{
                console.log(values);
            try {
                  const response = await axios.post("http://localhost:8080/joblisting/postjob", values);
                  console.log(response);
                  navigate(`/joblistings`);

                 } catch (error) {
                  console.error('Error submitting form:', error);
                 }
               }
          });

    return (
    <div className="container">
             <div className="jobnew-page-img"></div>
                <div className="outer-container">
                    <div className="outer-container-content">
                       <h2>INFORMATION</h2>
                       <p>
                        To create a new job listing, please provide the following details:
                        Enter the job title to clearly communicate the position.
                        Specify the company offering the job opportunity.
                        Mention the location of the job to help candidates identify the work site.
                        Indicate the salary for the position to attract suitable candidates.
                        Provide a detailed job description outlining responsibilities and requirements.
                        Choose the job type (e.g., full-time, part-time, remote) to set expectations.
                        Specify the required experience for potential applicants.
                        Describe the job overview to give candidates an understanding of the role.
                        Explain the application process in the "How to Apply" section.
                        Once the form is complete, click the "Add Job" button to add the job listing to our platform.
                       </p>
                   </div>
               <div className="form-container">
                <h2>Add New Job Opening</h2>
                <form onSubmit={handleSubmit}>
                  <div>
                        <label htmlFor="title">Title: </label>
                        <input
                           type="text"
                           autoComplete="off"
                           id="title"
                           name="title"
                           value={values.title}
                           placeholder="Frontend Developer"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           required
                          />
                  </div>
                  <div>
                        <label htmlFor="company">Company: </label>
                        <input
                           type="text"
                           autoComplete="off"
                           id="company"
                           name="company"
                           value={values.company}
                           placeholder="Enter company name"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           required
                          />
                  </div>
                  <div>
                        <label htmlFor="location">Location: </label>
                        <input
                           type="text"
                           autoComplete="off"
                           id="location"
                           name="location"
                           value={values.location}
                           placeholder="Enter location"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           required
                          />
                  </div>
                  <div>
                        <label htmlFor="salary">Salary: </label>
                        <input
                           type="number"
                           autoComplete="off"
                           id="salary"
                           name="salary"
                           value={values.salary}
                           placeholder="Enter salary"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           required
                          />
                  </div>
                  <div>
                        <label htmlFor="description">Description: </label>
                        <input
                           type="text"
                           autoComplete="off"
                           id="description"
                           name="description"
                           value={values.description}
                           placeholder="Enter job description"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           required
                          />
                  </div>
                  <div>
                      <label htmlFor="jobType">Jobtype: </label>
                      <select id="jobType" name="jobType" value={values.jobType} onChange={handleChange} required>
                              <option>Select one</option>
                             <option label="full-time" value="full-time">Full-time</option>
                             <option label="part-time" value="part-time">Part-time</option>
                             <option label="remote"    value="remote">Remote</option>
                      </select>
                  </div>
                  <div>
                        <label htmlFor="experience">Experience: </label>
                        <input
                           type="number"
                           autoComplete="off"
                           id="experience"
                           name="experience"
                           value={values.experience}
                           placeholder="Enter required experience"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           required
                          />
                  </div>
                  <div>
                        <label htmlFor="job">Job-Overview: </label>
                        <input
                           type="text"
                           autoComplete="off"
                           id="jobOverview"
                           name="jobOverview"
                           value={values.jobOverview}
                           placeholder="Enter job-overview"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           required
                          />
                  </div>
                  <div>
                        <label htmlFor="howToApply">How to apply: </label>
                        <input
                           type="text"
                           autoComplete="off"
                           id=" howToApply"
                           name="howToApply"
                           value={values.howToApply}
                           placeholder="Enter procedure for job application"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           required
                          />
                  </div>
                  <button type="submit" className="btn">
                    Add Job 
                 </button>
              </form>
          </div>
      </div>
    </div>
  );
};

export default JobNew;
