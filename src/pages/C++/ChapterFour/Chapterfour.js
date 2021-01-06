import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom'; //Used for linking
import {HashLink as Link} from 'react-router-hash-link';
import db from '../../../server/base';
import Loading from '../../Loading/Loading';

const Chapterfour = (props) => {
  
    const [questionOptions , setQuestionOptions] = useState({});
    const [chptContent, setChptContent] = useState({}); 
    const [loading , setLoading] = useState(true);
    const [compiled, setCompiled] = useState(false);
  
    useEffect(() => {
      //Extract data from database
      db.collection("website").doc("chapter4").get()
      .then((doc) => {
        //Receive data, then allow displaying on webpage (otherwise, display to user 'Loading')
        setQuestionOptions(doc.data());
        db.collection("content").doc("chapterfour").get()
        .then((doc) => {
          setChptContent(doc.data());
          setCompiled(true);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        })        
      }).catch((error) => {
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

export default Chapterfour;
