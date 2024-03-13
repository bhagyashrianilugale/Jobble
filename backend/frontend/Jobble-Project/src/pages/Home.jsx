import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
 
function Home() {

  return (
    <>
      <div className="home">
        <nav className="navbar">
            <div className="main-text"><FontAwesomeIcon icon={faEnvelope}/>&nbsp;Jobble</div>
              <a href="/Home">Home</a>
              <button className="nav-btn"><a href="/joblistings">Jobs</a></button>
              <button className="nav-btn"><a href="/joblisting/new">Add Job</a></button>
              <button className="nav-btn"><a href="/becomecandidate">Candidate</a></button>
              <button className="nav-btn"><a href="/becomeemployer">Employer</a></button>
              <button className="nav-btn"><a href="/signup">SignUp</a></button>
           </nav>
           <main className="main-content">
               <div className="content">
                   <h1>Get Your Dream <br></br>Job Through <span>Jobble</span></h1>
                    <p>The internet is a job seeker's most crucial tool to success today. From
                       connecting with potential employers online to researching job hunting best
                       Practices, it's a goldmine of opportunity.</p>
                        <SearchBar/>
                      </div>
               <div className="main-img"></div>
           </main>
           {/* <JobListings/> */}
           {/* <footer></footer> */}
      </div>
  

    </>
  )
}

export default Home;