import React from 'react';
import {NavLink} from 'react-router-dom';//Used for linking
import '../Homepage/homepage.css';

const Homepage = (props) => {
  return (
    <div>
      <div className="container">
        <div className="Title">
          <h1>Welcome to the Home page!</h1>
        </div>
        <div className="topnavbar">
          <NavLink to="/C++" className="nav-link"><h3>Learn about C++</h3></NavLink>
          <NavLink to="/C" className="nav-link"><h3>Learn about C</h3></NavLink>
          <NavLink to="/About" className="nav-link"><h3>About</h3></NavLink>
        </div>
        <div className="maincontent">
          <h1 className="Welcome">What are we about</h1>
            <h2 className="Content">
                If you're a beginner in coding and wish to learn, or even just search up some
                basic knowledge of something you forgot, you're in the right place! Here, we 
                break down the basics of coding and explain them in simpler terms. We also have
                a collection of different languages which allows you to be even more comfortable
                with learning! Please select any language you wish to learn from in the navigation
                bar seen above, and happy coding!
            </h2>
        </div>
      </div>  
    </div> 
  )
}

export default Homepage;