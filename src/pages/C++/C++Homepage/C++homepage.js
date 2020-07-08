import React from 'react';
import {NavLink} from 'react-router-dom'; //Used for linking
import '../../Styles/nav.css';

const Cplusplus = (props) => {
  return (
    <div>
      <div className="container">

        <div className="sidenav">
          <NavLink to="/" className="nav-link"><h2>Home</h2></NavLink>
          <NavLink to="/C++" className="nav-link"><h2>Introduction</h2></NavLink>
          <NavLink to="/Chapterone" className="nav-link"><h2>Chapter 1</h2></NavLink>
          <NavLink to="/Chaptertwo" className="nav-link"><h2>Chapter 2</h2></NavLink>
          <NavLink to="/Chapterthree" className="nav-link"><h2>Chapter 3</h2></NavLink>
          <NavLink to="/Chapterfour" className="nav-link"><h2>Chapter 4</h2></NavLink>
          <NavLink to="/Chapterfive" className="nav-link"><h2>Chapter 5</h2></NavLink>
          <NavLink to="/Chaptersix" className="nav-link"><h2>Chapter 6</h2></NavLink>
          <NavLink to="/Chapterseven" className="nav-link"><h2>Chapter 7</h2></NavLink>
          <NavLink to="/Chaptereight" className="nav-link"><h2>Chapter 8</h2></NavLink>
          <NavLink to="/Chapternine" className="nav-link"><h2>Chapter 9</h2></NavLink>
          <NavLink to="/Chapterten" className="nav-link"><h2>Chapter 10</h2></NavLink>
        </div>

        <div className="main">
          <h1 className="ChapterTitle">Welcome to learning C++!</h1>
          <h5>
            <ol>
              <li>Talk about Installations required for starting C++</li>
              <li>Include htrl link to introduction page (beginning of learning)</li>
            </ol>
          </h5>
        </div>
        






      </div>
    </div>
  )
}

export default Cplusplus;