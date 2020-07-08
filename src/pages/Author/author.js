import React from 'react';
import {NavLink} from 'react-router-dom'; //Used for linking

const About = (props) => {
  return (
    <div>
     <NavLink to="/" className="nav-link"><h2>Back to Home!</h2></NavLink>
    </div>
  )
}

export default About;