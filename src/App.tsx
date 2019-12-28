import React, { FC } from 'react';
import './App.css';
import IntroduceYourself from './components/introduce-yourself/IntroduceYourself';
import Experience2 from './components/experience/Experience2';
import Education from './components/education/Education';
const App:FC = ()=> {
  return (
    <div className="App">
      
      <IntroduceYourself/>
      <Experience2/>
      <Education/>
    </div>
  );
}

export default App;

