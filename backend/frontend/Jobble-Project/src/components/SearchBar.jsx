import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';


function SearchBar(){
    const initialValues = {
       title: '',
    };

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: initialValues,
      onSubmit: async (values) =>{
      console.log(values);
      try {
           const response = await axios.get("http://localhost:8080/joblistings/", values);
           console.log(response);
           navigate(`/joblisting/applyfor/${jobId}`);

          } catch (error) {
           console.error('Error submitting form:', error);
          }
        }
  });
  
 
  return (
    <div>
     <form>
      <div  className="search-control">
      <input
        type="text"
        id="searchTerm"
        name="searchTerm"
        placeholder="Search by job title"
      />
        <button type="submit" className="search-btn">Search</button>
      </div>
     </form>
    
    </div>
  );
};

export default SearchBar;
