import React, { useEffect, useState } from 'react';
import {useFormik} from "formik";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ApplicationForm=()=>{
    const navigate = useNavigate();
    const { jobId } = useParams();
    const initialValues = {
           email: '',
           resumeUrl: '',
           coverLetter: '',
           };

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
          initialValues: initialValues,
          onSubmit: async (values) =>{
          console.log(values);
          try {
               const response = await axios.post("http://localhost:8080/joblisting/applyfor", values);
               console.log(response);
               navigate(`/joblisting/applyfor/${jobId}`);

              } catch (error) {
               console.error('Error submitting form:', error);
              }
            }
           
            
         });
 
    return(
        <div className="container">
            <div className="application-page-img"></div>
                <div className="outer-container">
                <div className="outer-container-content">
                       <h2>INFORMATION</h2>
                       <p>
                          To apply for a job, please provide the following details:
                          Enter your email address to ensure effective communication.
                          Attach your resume by providing the URL where it can be accessed.
                          Optionally, include a cover letter to express your interest and provide additional information.
                          Once the form is complete, click the submit button to send your job application to the employer.
                       </p>
                   </div>
                   <div className="form-container">
                       <h2>Job Application Form</h2>
                       <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div>
                        <label htmlFor="email">Candidate Email:</label>
                        <input
                         type="text"
                         name="email"
                         id="email"
                         autoComplete="off"
                         placeholder="Enter your email"
                         value={values.email}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         required
                        />
                    </div>
                    <div> 
                     <label htmlFor="resumeUrl">Upload Resume</label>
                     <input
                      type="file"
                      name="resumeUrl"
                      id="resumeUrl"
                      accept=".pdf, .doc, .docx"
                      autoComplete="off"
                      value={values.resumeUrl}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                     /> 
                    </div>    
                    <div>
                    <label htmlFor="coverLetter">Cover letter:</label>
                    <textarea
                      type="text"
                      name="coverLetter"
                      id="coverLetter"
                      autoComplete="off"
                      placeholder="Upload your cover letter"
                      value={values.coverLetter}
                      onChange={handleChange}
                      onBlur={handleBlur}
                     /> 
                  </div>
            
           <button type="submit" className="btn">Submit</button>
           </form>
              </div>
           </div>
        </div>
    )

}

export default ApplicationForm;