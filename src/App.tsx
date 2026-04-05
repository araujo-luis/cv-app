import React, { FC, useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import GA4React from 'ga-4-react';
import IntroduceYourself from './components/introduce-yourself/IntroduceYourself';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import NavigationBar from './components/navigation/NavigationBar';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import VideoDivider from './components/ui/VideoDivider';
import NotFound from './components/NotFound/NotFound';

const App: FC = () => {
  useEffect(() => {
    const trackingId = process.env.REACT_APP_TRACKING_ID || '';
    if (trackingId) {
      const ga4react = new GA4React(trackingId);
      ga4react.initialize().then((ga) => {
        ga.pageview(window.location.pathname + window.location.search);
      });
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const Home: FC = () => {
  return (
    <div className="min-h-[100dvh] bg-zinc-950 text-zinc-100 font-sans antialiased">
      <NavigationBar />
      <IntroduceYourself />
      <Experience />
      <Skills />
      <VideoDivider />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
