import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import Employer from './pages/Employer.jsx';
import Candidate from './pages/Candidate.jsx';
import JobDetails from './components/JobDetails.jsx';
import JobNew from './components/JobNew.jsx';
import UpdateJobListing from './components/UpdatejobListing.jsx';
import ApplicationForm from './components/ApplicationForm.jsx';
import Jobs from './components/JobListings.jsx';
 



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
           <Routes> 
               <Route path="*" element={<Home/>}/>
               <Route path="/joblisting/jobdetails/:jobId" element={<JobDetails/>}/>
               <Route path="/joblisting/new" element={<JobNew/>}/>
               <Route path="/joblisting/update/:jobId" element={<UpdateJobListing/>}/>
               <Route path="/joblisting/applyfor/:jodId" element={<ApplicationForm/>}/>
               <Route path="/joblistings" element={<Jobs/>}/>
               <Route path="/becomeemployer" element={<Employer/>}/>
               <Route path="/becomecandidate" element={<Candidate/>}/>
               <Route path="/signup" element={<SignUp/>}/>
          </Routes>
       </Router>
   </>
  );
}

export default App;
