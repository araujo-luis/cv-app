import React, { FC } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import GA4React from "ga-4-react";
import './App.css';
import IntroduceYourself from './components/introduce-yourself/IntroduceYourself';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Subheader from './components/Subheader/Subheader';
import Contact from './components/contact/Contact';
import NavigationBar from './components/navigation/NavigationBar';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import NotFound from './components/NotFound/NotFound';
const App: FC = () => {
  const trackingId = process.env.REACT_APP_TRACKING_ID || '';
  const ga4react = new GA4React(trackingId);
  ga4react.initialize().then(ga => {
    ga.pageview(window.location.pathname + window.location.search)
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

const Home: FC = () => {
  return (
    <div className="App">
      <NavigationBar />
      <IntroduceYourself />
      <Subheader highlitedText="My" text="Resume" id="my-resume" />
      <Experience />
      <Subheader highlitedText="My" text="Skills" id="my-skills" />
      <Skills />
      <Subheader highlitedText="My" text="Portfolio" id="my-portfolio" />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )

}

export default App;

