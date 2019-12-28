import React, { FC } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import IntroduceYourself from './components/introduce-yourself/IntroduceYourself';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
const App:FC = ()=> {
  return (
    <div className="App">
      
      <IntroduceYourself/>
      <Experience/>
      <Education/>
    </div>
  );
}

export default App;

