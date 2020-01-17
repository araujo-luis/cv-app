import React, { FC } from 'react';
import './App.css';
import IntroduceYourself from './components/introduce-yourself/IntroduceYourself';
import Experience3 from './components/experience/Experience3';
import Skills from './components/skills/Skills';
import Subheader from './components/Subheader/Subheader';
import Contact from './components/contact/Contact';
import NavigationBar from './components/navigation/NavigationBar';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
const App:FC = ()=> {
  return (
    <div className="App">
      <NavigationBar/>
      <IntroduceYourself/>
      <Subheader highlitedText="My" text="Resume" id="my-resume"/>
      <Experience3/>
      <Subheader highlitedText="My" text="Skills" id="my-skills"/>
      <Skills/>
      <Subheader highlitedText="My" text="Portfolio" id="my-portfolio"/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

