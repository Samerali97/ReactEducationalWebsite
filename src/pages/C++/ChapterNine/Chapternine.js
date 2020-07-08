import React from 'react';
import {NavLink} from 'react-router-dom'; //Used for linking

const Chapternine = (props) => {
  return (
    <div>
      <div className="container">
        <div className="home">
          <h1>This is Chapter Nine! </h1>
        </div>
        <NavLink to="/C++" className="nav-link"><h2>Back to Home!</h2></NavLink>
      </div>
    </div>
  )
}

export default Chapternine;