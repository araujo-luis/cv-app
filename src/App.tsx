import React, { FC } from 'react';
import './App.css';
import IntroduceYourself from './components/introduce-yourself/IntroduceYourself';
import Experience3 from './components/experience/Experience3';
import Skills from './components/skills/Skills';
import Subheader from './components/Subheader/Subheader';
import Contact from './components/contact/Contact';
import NavigationBar from './components/navigation/NavigationBar';
const App:FC = ()=> {
  return (
    <div className="App">
      <NavigationBar/>
      <IntroduceYourself/>
      <Subheader highlitedText="My" text="Resume" id="my-resume"/>
      <Experience3/>
      <Subheader highlitedText="My" text="Skills" id="my-skills"/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;

