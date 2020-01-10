import React, { FC } from 'react';
import './App.css';
import IntroduceYourself from './components/introduce-yourself/IntroduceYourself';
import Experience3 from './components/experience/Experience3';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
const App:FC = ()=> {
  return (
    <div className="App">
      
      <IntroduceYourself/>
      <Experience3/>
      <Skills/>
      <Education/>
    </div>
  );
}

export default App;

