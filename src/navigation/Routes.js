import React from 'react';
import { Route } from 'react-router';
import Chapterone from '../pages/C++/ChapterOne/Chapterone';
import Homepage from '../pages/Homepage/Homepage';
import Chaptertwo from '../pages/C++/ChapterTwo/Chaptertwo';
import Chapterthree from '../pages/C++/ChapterThree/Chapterthree';
import Chapterfour from '../pages/C++/ChapterFour/Chapterfour';
import Chapterfive from '../pages/C++/ChapterFive/Chapterfive';
import Chaptersix from '../pages/C++/ChapterSix/Chaptersix';
import Chapterseven from '../pages/C++/ChapterSeven/Chapterseven';
import Chaptereight from '../pages/C++/ChapterEight/Chaptereight';
import Chapternine from '../pages/C++/ChapterNine/Chapternine';
import Chapterten from '../pages/C++/ChapterTen/Chapterten';
import Cplusplus from '../pages/C++/C++Homepage/C++homepage';
import About from '../pages/Author/author';
import CLanguage from '../pages/C/CHomepage/chomepage';

//Defines the path in the html for each webpage (chooses website based on tag)
const FileRoutes = () => {
    return (
        <div>
            <Route path="/" component={Homepage} exact />
            <Route path="/Chapterone" component={Chapterone} exact />
            <Route path="/Chaptertwo" component={Chaptertwo} exact />
            <Route path="/Chapterthree" component={Chapterthree} exact />
            <Route path="/Chapterfour" component={Chapterfour} exact />
            <Route path="/Chapterfive" component={Chapterfive} exact />
            <Route path="/Chaptersix" component={Chaptersix} exact />
            <Route path="/Chapterseven" component={Chapterseven} exact />
            <Route path="/Chaptereight" component={Chaptereight} exact />
            <Route path="/Chapternine" component={Chapternine} exact />
            <Route path="/Chapterten" component={Chapterten} exact />
            <Route path="/C++" component={Cplusplus} exact />
            <Route path="/About" component={About} exact />
            <Route path="/C" component={CLanguage} exact />
        </div>
    )
}

export default FileRoutes;