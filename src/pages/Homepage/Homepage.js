import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';//Used for linking
import '../Homepage/homepage.css';
import db from '../../server/base';

const Homepage = (props) => {

  /*
  //This DB functionality shall add a question to the DB
  useEffect(() => { 

    db.collection("questions").add({
      question: "This is a Testing Question",
      choice: "Incorrect Answer",
      choice2: "Also Incorrect Answer"
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }, [])
  */

/*
  //This DB functionality shall retrieve object from collection
 useEffect(() => { 
  db.collection("website/").get()
  .then(function(docRef) {
    docRef.forEach(function(doc)
    {
      console.log(doc.id, " => ", doc.data());
    })
  })
  .catch(function(error) {
    console.error("Error adding document: ");
  })
  }, [])
*/
  
/*
//This functionality shall store a 'user' within DB, then retrieve the user from DB
 const docRef = db.collection('users').doc('alovelace');
 docRef.set({
   first: 'Ada',
   last: 'Lovelace',
   born: 1815
 });

 const location = db.collection('users').doc('alovelace');
 const temppuser = location.get()
 .then(function(doc) {
  console.log("This is the user's information: ", doc.data());
})
.catch(function(error) {
  console.error("Error adding document: ");
});
*/

/*
useEffect(() => { 
  //We initialize different documents within the database
  const citiesRef = db.collection('cities');

  citiesRef.doc('SF').set({
    name: 'San Francisco', state: 'CA', country: 'USA',
    capital: false, population: 860000
  });
  citiesRef.doc('LA').set({
    name: 'Los Angeles', state: 'CA', country: 'USA',
    capital: false, population: 3900000
  });
  citiesRef.doc('DC').set({
    name: 'Washington, D.C.', state: null, country: 'USA',
    capital: true, population: 680000
  });
  citiesRef.doc('TOK').set({
    name: 'Tokyo', state: null, country: 'Japan',
    capital: true, population: 9000000
  });
  citiesRef.doc('BJ').set({
    name: 'Beijing', state: null, country: 'China',
    capital: true, population: 21500000
  });

  //We retrieve 'SF' document from the collection 'Cities'
  const cityRef = db.collection('cities').doc('SF');
  const doc = cityRef.get();
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', doc.data());
  }

  }, [])//end of UseEffect
*/
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