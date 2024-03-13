import React, { useState } from 'react';
import {useFormik} from "formik";
import axios from 'axios';

function Candidate(){
    const initialValues = {
        fullName: '',
        email: '',
        skills: '',
        education: '',
        experience:'',
        password:''
};
const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) =>{
           console.log(values);
       try {
             const response = await axios.post("http://localhost:8080/jobble/candidate", values);
             console.log(response);
            } catch (error) {
             console.error('Error submitting form:', error);
            }
          }
        });

    return(
        <div className="container">
             <div className="candidate-page-img"></div>
                <div className="outer-container">
                  <div className="outer-container-content">
                      <h2>INFORMATION</h2>
                      <p>
                        <b>Welcome to your Candidate Dashboard! </b>This is your personal space to explore job opportunities, 
                        manage applications, and showcase your skills to potential employers. 
                        Browse through the "Job Listings" section to discover open positions that match your expertise. 
                        Click on the job details to view detailed descriptions and application instructions.
                        If you have any questions or need assistance, feel free to reach out to our support team. 
                        Best of luck with your job search!
                      </p>
                      <p>
                        Candidate Registration: To begin your journey, kindly share the following details as a candidate. 
                        Enter your full name, ensuring accuracy for a professional representation. 
                        Provide a valid email address for communication and account-related updates. 
                        List your skills to showcase your expertise to potential employers. 
                        Specify your educational background, highlighting your academic achievements. 
                        Share your work experience to give employers insights into your professional journey. 
                        Choose a secure password to safeguard your account. 
                        Once the form is complete, click the submit button to register your candidate profile and 
                        explore exciting job opportunities on our platform.
                     </p>
                 </div>
                <div className="form-container">
                   <h2>Candidate Dashboard</h2>
                   <form onSubmit={handleSubmit}>
                   <div>
                   <label htmlFor="fullName">Full Name:</label>
                   <input
                     type="text"
                     name="fullName"
                     id="fullName"
                     autoComplete="off"
                     placeholder="Enter your full name"
                     value={values.fullName}
                     onChange={handleChange}
                     onBlur={handleBlur}
                    required
                   />
                </div>
                <div>
                   <label htmlFor="email">Email:</label>
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
                  <label htmlFor="skills">Skills:</label>
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    autoComplete="off"
                    placeholder="Enter your skills"
                    value={values.skills}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
             </div>
             <div>
                <label htmlFor=" education">Education:</label>
                <input
                 type="text"
                 name="education"
                 id="education"
                 autoComplete="off"
                 placeholder="Enter education"
                 value={values.education}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 required
                />
            </div>
            <div>
                <label htmlFor="experience">Experience:</label>
                <input
                 type="text"
                 min="0"
                 name="experience"
                 id="experience"
                 autoComplete="off"
                 placeholder="Enter years of experience"
                 value={values.experience}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                 type="password"
                 name="password"
                 id="password"
                 autoComplete="off"
                 placeholder="Enter your password"
                 value={values.password}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 required
                />
            </div>
                  <button type="submit" className="btn">
                        Submit
                   </button>
                </form>
              </div>
            </div>
        </div>
    )
};

export default Candidate;
