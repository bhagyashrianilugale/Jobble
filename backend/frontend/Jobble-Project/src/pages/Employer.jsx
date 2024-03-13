import React, { useState } from 'react';
import {useFormik} from "formik";
import axios from 'axios';

function Employer(){
    const initialValues = {
        companyName: '',
        location: '',
        contactEmail: '',
        password: '',
};

const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) =>{
           console.log(values);
       try {
             const response = await axios.post("http://localhost:8080/jobble/employer", values);
             console.log(response);
            } catch (error) {
             console.error('Error submitting form:', error);
            }
          }
        });

    return(
     <div className="container">
        <div className="employer-page-img"></div>
           <div className="outer-container">
              <div className="outer-container-content">
                  <h2>INFORMATION</h2>
                  <p>
                    <b>Welcome to your Employer Dashboard!</b> This is your centralized hub to manage job listings, 
                    view applications, and interact with potential candidates. 
                    To post a new job listing, click on the "Add Job" button and fill in the 
                    details of the position you're looking to fill. 
                    Navigate to the "Job Listings" section to view and edit your existing job postings.
                    In the "Applications" tab, you can review and respond to job applications from candidates. 
                    Feel free to explore the features available on your dashboard and reach out to our support team if 
                    you have any questions or need assistance.
                 </p>
                 <p>
                   Company Registration: To get started, please provide the information for your company. 
                   Enter your company name, ensuring it accurately reflects your business identity. 
                   Specify the location of your company's headquarters or main office. 
                   Provide a valid contact email address for communication related to your company account. 
                   Choose a secure password to protect your account. 
                   Once the form is complete, click the submit button to register your company and access our platform's features.
                 </p>
                </div>
        <div className="form-container">
            <h2>Employer Dashboard</h2>
            <form onSubmit={handleSubmit}>
             <div>
                <label htmlFor="companyName">Company Name:</label>
                <input
                 type="text"
                 name="companyName"
                 id="companyName"
                 autoComplete="off"
                 placeholder="Enter company name"
                 value={values.companyName}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 required
                />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <input
                 type="text"
                 name="location"
                 id="location"
                 autoComplete="off"
                 placeholder="Enter company location"
                 value={values.location}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 required
                />
            </div>
             <div>
                <label htmlFor="contactEmail">Contact Email:</label>
                <input
                 type="text"
                 name="contactEmail"
                 id="contactEmail"
                 autoComplete="off"
                 placeholder="Enter email for contact"
                 value={values.contactEmail}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 required
                />
            </div>
            <div>
                <label htmlFor="email">Password:</label>
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
    )};

export default Employer;

