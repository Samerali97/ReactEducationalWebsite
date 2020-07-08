import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom'; //Used for linking
import {HashLink as Link} from 'react-router-hash-link';
//import {Dropdown} from 'react-bootstrap';
import './chapterone.css';
import '../../Styles/nav.css';
import '../../Styles/chpt.css';

import db from '../../../server/base';
import Loading from '../../Loading/Loading';

const Chapterone = (props) => {

  const [questionOptions , setQuestionOptions] = useState({});
  const [loading , setLoading] = useState(true);
  const [compiled, setCompiled] = useState(false);

  useEffect(() => {
    db.collection("website").doc("chapter1").get()
    .then((doc) => {
      setQuestionOptions(doc.data());
      setCompiled(true);
      setLoading(false)
    }).catch((error) => {
      console.error(error);
    })
  }, []);


  const Question = () => {

    const [correctChoice , setCorrectChoice] = useState("");

    const {
      question,
      choices
    } = questionOptions;

    return (
      <div>
        <h3>{question}</h3>
       <h5>{correctChoice}</h5>
        <ul>
          {
            choices.map((index) => (
              <div key={choices.indexOf(index)} >
                <li onClick={() => {
                  if (index.correct === true) {
                    setCorrectChoice("Correct!")
                  } else {
                    setCorrectChoice("Incorrect!")
                  }
                }}>{index.choice}</li>
              </div>
            ))
          }
        </ul>
      </div>
    )
  }

  const CompilePage = ({comp}) => {
    if (comp) {
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
            <h1 className="ChapterTitle">Chapter 1</h1>
            <h2 className="toc-title">Table of Contents</h2>
            <ul className="toc-list">
              <li><Link to="/Chapterone#C1.1">Section 1.1</Link> </li>
              <li><Link to="/Chapterone#C1.2">Section 1.2</Link></li>
              <li><Link to="/Chapterone#C1.3">Section 1.3</Link></li>
              <li><Link to="/Chapterone#C1.4">Section 1.4</Link></li>
              <li><Link to="/Chapterone#C1.5">Section 1.5</Link></li>
            </ul>

            <div className="content">
              <h2 className="chpt-sec-title" id="C1.1">Chapter 1.1</h2>
              <p className="chpt-sec-paragraph">Cake or pie? I can tell a lot about you by which one you pick.
                  It may seem silly, but cake people and pie people are really different.
                  I know which one I hope you are,but that's not for me to decide.
                  So, what is it? Cake or pie?
              </p>
              <h2 className="chpt-sec-title" id="C1.2">Chapter 1.2</h2>
              <p className="chpt-sec-paragraph">
                Here's the thing. She doesn't have anything to prove, but she is going
                to anyway. That's just her character. She knows she doesn't have to,
                  but she still will just to show you that she can. Doubt her more
                and she'll prove she can again. We all already know this and you will too.
              </p>
              <h2 className="chpt-sec-title" id="C1.3">Chapter 1.3</h2>
              <p className="chpt-sec-paragraph">
                Something about 1.3
              </p>
              <h2 className="chpt-sec-title" id="C1.4">Chapter 1.4</h2>
              <p className="chpt-sec-paragraph">
                Here's the thing. She doesn't have anything to prove, but she is going
                to anyway. That's just her character. She knows she doesn't have to,
                  but she still will just to show you that she can. Doubt her more
                and she'll prove she can again. We all already know this and you will too.
              </p>
              <h2 className="chpt-sec-title" id="C1.5">Chapter 1.5</h2>
              <p className="chpt-sec-paragraph">
                Something about 1.5
              </p>
              <Question/>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

    return (
      <div>
        <Loading loading={loading} />
        <CompilePage comp={compiled}/>
      </div>
    )

  }

export default Chapterone;