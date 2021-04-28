import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import TourList from './components/TourList/TourList';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/tourList' component={TourList} />
      </Switch>
    </>
  );
};

export default App;
