import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';


function UpdateJobListing() {
  const { jobId } = useParams();
  console.log(jobId);
  const navigate = useNavigate();


  const [initialValues, setInitialValues] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
    jobType: '',
    experience: '',
    jobOverview: '',
    howToApply: '',
  });

  const [jobListing, setJobListing] = useState({});

  const getJoblisting = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/joblisting/update/${jobId}`);
      const { data } = response;
      console.log(data);

      setInitialValues({
        title: data.title,
        company: data.company,
        location: data.location,
        salary: data.salary,
        description: data.description,
        jobType: data.jobType,
        experience: data.experience,
        jobOverview: data.jobOverview,
        howToApply: data.howToApply,
      });

      setJobListing(data);
      navigate(`/joblistings`);


    } catch (err) {
      console.error('Error fetching job listing:', err);
    }
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log(values);
      const response = await axios.put(`http://localhost:8080/joblisting/${jobId}/update`, values);
      console.log(response);
    }
  });

  useEffect(() => {
    getJoblisting();
  }, [jobId]);

  return (
    <div className="container">
        <div className="jobnew-page-img"></div>
        <div className="outer-container">
        <div className="outer-container-content">
                       <h2>INFORMATION</h2>
                       <p>
                          Updating Existing Job Listings: Our platform makes it easy for employers to manage 
                          and refine their job listings. If you have an existing job opening that requires updates or 
                          modifications, you're in the right place.
                          here you can make changes to details such as title, company, location, salary, description, job type, 
                          experience requirements, job overview, and how to apply. Once there, you'll have a user-friendly 
                          form pre-filled with the current information. Make the necessary adjustments and click the "Add Job" button to save your
                          Our platform prioritizes a seamless experience, ensuring that employers can effortlessly keep their job listings accurate 
                          and attractive to potential candidates. Thank you for choosing our platform to manage your job listings effectively.
                      </p>
                   </div>
        <div className="form-container">
         <h2>Update Existing Job Opening</h2>
        <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="title">Title:{jobListing.title}</label>
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
                       <label htmlFor="company">Company:{jobListing.company}</label>
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
                        <label htmlFor="location">Location:{jobListing.location}</label>
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
                        <label htmlFor="salary">Salary:{jobListing.salary}</label>
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
                        <label htmlFor="description">Description:{jobListing.description}</label>
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
                        <label htmlFor="experience">Experience:{jobListing.experience}</label>
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
                      <label htmlFor="jobType">Jobtype:{jobListing.jobType}</label>
                      <select id="jobType" name="jobType" value={values.jobType} onChange={handleChange}  onBlur={handleBlur} required>                            
                             <option>Select one</option>
                             <option label="full-time" value="full-time">Full-time</option>
                             <option label="part-time" value="part-time">Part-time</option>
                             <option label="remote"    value="remote">Remote</option>
                      </select>
                  </div>
                  <div>
                        <label htmlFor="job">Job-Overview:{jobListing.jobOverview}</label>
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
                        <label htmlFor="howToApply">How to apply:</label>
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
}

export default UpdateJobListing;