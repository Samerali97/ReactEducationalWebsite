import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom'; //Used for linking
import {HashLink as Link} from 'react-router-hash-link';
import db from '../../../server/base';
import Loading from '../../Loading/Loading';

const Chapternine = (props) => {
  
    const [questionOptions , setQuestionOptions] = useState({}); 
    const [chptContent, setChptContent] = useState({});
    const [loading , setLoading] = useState(true);
    const [compiled, setCompiled] = useState(false);
  
    useEffect(() => {
      //Extract data from database
      db.collection("website").doc("chapter9").get()
      .then((doc) => {
        //Receive data, then allow displaying on webpage (otherwise, display to user 'Loading')
        setQuestionOptions(doc.data());
        db.collection("content").doc("chapternine").get()
        .then((doc) => {
          setChptContent(doc.data());
          setCompiled(true);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        })        
      })
      .catch((error) => {
        console.error(error);
      })
    }, []);

    //Function to display Chapter Sections within website
    const ChapterContents = () => {
      const {
        title,
        sections
      } = chptContent;

      return (
        <div className="main">
          <div className="ChapterTitle">
            <h1>{title}</h1>
          </div>      
          <h2 className="toc-title">Table of Contents</h2>
          <ul className="toc-list">
          {
              sections.map((index) => (
                <div key={sections.indexOf(index)}>
                  <li><Link to={'#C' + index.iD}> Chapter {index.iD}</Link> </li>
                </div>
              ))
            }    
          </ul>    
            <div className="content">
              {
                sections.map((index) => (
                  <div key={sections.indexOf(index)}>
                    <h2 className="chpt-sec-title" id={'C' + index.iD}>{index.sectionTitle}</h2>
                    <p className="chpt-sec-paragraph">{index.sectionContent}</p>
                  </div>
                ))
              }          
            </div>         
        </div>
      )
    }

    //Function to display question within website
    const Question = () => {
      const [correctChoice , setCorrectChoice] = useState("");
      const [choice, setChoice] = useState({});
      const {
        question,
        choices
      } = questionOptions;

    return (
      <div>
        <div className="questionBox">
        <h3>{question}</h3>
        <h5>{correctChoice}</h5>
            {
              choices.map((index) => (
                <div key={choices.indexOf(index)} >
                  <label>
                    <input type="radio" name="choices" onChange={() => {
                      setChoice(index);
                  }} />
                    {index.choice}
                  </label>
                </div>
              ))
            }
          <br/>
        <button onClick={() => {
          if (choice.correct === true) {
            setCorrectChoice("Correct!")
          } else {
            setCorrectChoice("Incorrect!")
          }
        }}>
          Submit
        </button>
        </div>
      </div>
    )
  }

  const SideNavigationBar = () => {
    return (
      <div>
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
      </div>
    )
  }

  const CompilePage = ({comp}) => {
    if(comp){
      return (
        <div className="container">
          <SideNavigationBar/>
          <ChapterContents/>
          <Question/>
        </div>
      )
    }else{
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

export default Chapternine;

/*
<div className="main">
        <h1 className="ChapterTitle">Chapter 9</h1>
        <h2 className="toc-title">Table of Contents</h2>
        <ul className="toc-list">
          <li><Link to="/Chapternine#C9.1">Section 9.1</Link> </li>
          <li><Link to="/Chapternine#C9.2">Section 9.2</Link></li>
          <li><Link to="/Chapternine#C9.3">Section 9.3</Link></li>
          <li><Link to="/Chapternine#C9.4">Section 9.4</Link></li>
          <li><Link to="/Chapternine#C9.5">Section 9.5</Link></li>       
        </ul>
        <div className="content"> 
          <h2 className="chpt-sec-title" id="C9.1">Chapter 9.1</h2>
          <p className="chpt-sec-paragraph">Cake or pie? I can tell a lot about you by which one you pick.
              It may seem silly, but cake people and pie people are really different.
              I know which one I hope you are,but that's not for me to decide.
              So, what is it? Cake or pie? 
          </p>
          <h2 className="chpt-sec-title" id="C9.2">Chapter 9.2</h2>
          <p className="chpt-sec-paragraph">
            Here's the thing. She doesn't have anything to prove, but she is going
            to anyway. That's just her character. She knows she doesn't have to,
              but she still will just to show you that she can. Doubt her more
            and she'll prove she can again. We all already know this and you will too.
          </p>
          <h2 className="chpt-sec-title" id="C9.3">Chapter 9.3</h2>
          <p className="chpt-sec-paragraph">
            Something about 9.3
          </p>
          <h2 className="chpt-sec-title" id="C9.4">Chapter 9.4</h2>
          <p className="chpt-sec-paragraph">
            Here's the thing. She doesn't have anything to prove, but she is going
            to anyway. That's just her character. She knows she doesn't have to,
              but she still will just to show you that she can. Doubt her more
            and she'll prove she can again. We all already know this and you will too.
          </p>
          <h2 className="chpt-sec-title" id="C9.5">Chapter 9.5</h2>
          <p className="chpt-sec-paragraph">
            Something about 9.5
          </p>
          <Question/>
        </div>
      </div>
*/