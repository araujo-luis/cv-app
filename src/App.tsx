import React, { FC } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import IntroduceYourself from './components/introduce-yourself/IntroduceYourself';
const App:FC = ()=> {
  return (
    <div className="App">
      
      <IntroduceYourself></IntroduceYourself>
    </div>
  );
}

export default App;
