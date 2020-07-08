import React from 'react';
import {NavLink} from 'react-router-dom'; //Used for linking
import {HashLink as Link} from 'react-router-hash-link';

const Chaptertwo = (props) => {
  return (
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
        <h1 className="ChapterTitle">Chapter 2</h1>
        <h2 className="toc-title">Table of Contents</h2>
        <ul className="toc-list">
          <li><Link to="/Chaptertwo#C2.1">Section 2.1</Link> </li>
          <li><Link to="/Chaptertwo#C2.2">Section 2.2</Link></li>
          <li><Link to="/Chaptertwo#C2.3">Section 2.3</Link></li>
          <li><Link to="/Chaptertwo#C2.4">Section 2.4</Link></li>
          <li><Link to="/Chaptertwo#C2.5">Section 2.5</Link></li>       
        </ul>
        <div className="content"> 
          <h2 className="chpt-sec-title" id="C2.1">Chapter 2.1</h2>
          <p className="chpt-sec-paragraph">Cake or pie? I can tell a lot about you by which one you pick.
              It may seem silly, but cake people and pie people are really different.
              I know which one I hope you are,but that's not for me to decide.
              So, what is it? Cake or pie? 
          </p>
          <h2 className="chpt-sec-title" id="C2.2">Chapter 2.2</h2>
          <p className="chpt-sec-paragraph">
            Here's the thing. She doesn't have anything to prove, but she is going
            to anyway. That's just her character. She knows she doesn't have to,
              but she still will just to show you that she can. Doubt her more
            and she'll prove she can again. We all already know this and you will too.
          </p>
          <h2 className="chpt-sec-title" id="C2.3">Chapter 2.3</h2>
          <p className="chpt-sec-paragraph">
            Something about 2.3
          </p>
          <h2 className="chpt-sec-title" id="C2.4">Chapter 2.4</h2>
          <p className="chpt-sec-paragraph">
            Here's the thing. She doesn't have anything to prove, but she is going
            to anyway. That's just her character. She knows she doesn't have to,
              but she still will just to show you that she can. Doubt her more
            and she'll prove she can again. We all already know this and you will too.
          </p>
          <h2 className="chpt-sec-title" id="C2.5">Chapter 2.5</h2>
          <p className="chpt-sec-paragraph">
            Something about 2.5
          </p>
        </div>
      </div>
    </div>
  )
}

export default Chaptertwo;