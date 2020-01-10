import React, { FC } from 'react';
import './App.css';
import IntroduceYourself from './components/introduce-yourself/IntroduceYourself';
import Experience3 from './components/experience/Experience3';
import Skills from './components/skills/Skills';
import Subheader from './components/Subheader/Subheader';
const App:FC = ()=> {
  return (
    <div className="App">
      
      <IntroduceYourself/>
      <Subheader highlitedText="My" text="Resume"/>
      <Experience3/>
      <Subheader highlitedText="My" text="Skills"/>
      <Skills/>
    </div>
  );
}

export default App;

