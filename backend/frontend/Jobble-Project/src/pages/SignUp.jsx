import React from "react";
import {useFormik} from "formik";
import axios from 'axios';
import { LoginSchema } from "../Schemas";


function SignUp(){
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        usertype: 'select one', // Default user type
      };

     const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
         initialValues: initialValues,
         onSubmit: async (values) =>{
            console.log(values);
          try {
            const response = await axios.post("http://localhost:8080/signupnuser", values);
            console.log(response);
          } catch (error) {
            console.error('Error submitting form:', error);
          }
         console.log(values);
      }
    });
    const divStyle = {
      marginLeft: "20px"   
     }
    return(
        <div className="container">
          <div className="signup-page-img"></div>
           <div className="outer-container">
            <div className="outer-container-content">
             <h2>INFORMATION</h2>
                   <p>
                   <b>Welcome!</b> To create a new account, please fill out the registration form. 
                   </p>
                   <p>
                   Ensure that your username is unique and has not been used by another user. 
                   Provide a valid email address that will be used for account communication. 
                   Choose a strong and secure password, and confirm it to avoid any typos. 
                   Select your user type from the dropdown menu, whether you are a candidate or an employee. 
                   Once the form is complete, click the submit button to register and enjoy the benefits of our platform!
                   </p>
             </div>
         <div className="form-container">
            <h2>SIGNUP PAGE</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">
                      UserName:
                     </label>
                      <input
                       type="text"
                       autoComplete="off"
                       name="username"
                       id="username"
                       placeholder="Name"
                       value={values.username}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       required
                       ></input>
                       
                </div>
                <div>
                     <label htmlFor="email">
                         Email:
                     </label>
                     <input
                       type="email"
                       autoComplete="off"
                       name="email"
                       id="email"
                       placeholder="john546@gmail.com"
                       value={values.email}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       required
                       ></input>
                </div>
                <div className="password-container">
                  <div>
                    <label htmlFor="password">
                      Password:
                   </label>
                   <input
                     type="password"
                     autoComplete="off"
                     name="password"
                     id="password"
                     placeholder="password"
                     value={values.password}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     required
                      ></input>
                  </div>
                  <div style={divStyle}>
                    <label htmlFor="confirm_password">
                      Confirm Password:
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="confirm_password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                       ></input>
                    </div>
                </div>
                <div>
                    <label htmlFor="usertype">Choose usertype:</label>
                    <select id="usertype" name="usertype" value={values.usertype}  onChange={handleChange} required>
                      <option>Select One</option>
                      <option label="candidate" value="candidate">Candidate</option>
                      <option  label="employee"value="employee">Employee</option>
                    </select>
                 </div>
                <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
};

export default SignUp;