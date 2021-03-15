import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <Router>
    <NavBar/>   
    <Switch>
    <Route exact path="/" component = {Home}/> 
    <Route exact path="/contact"  component = {ContactMe}/>
    <Route exact path="/resume" component = {Resume}/> 
    <Route exact path="/projects" component = {Projects}/> 
    <Route exact path="/resume" component = {Resume}/> 

    </Switch>  
    </Router>
    </>
  );
}

export default App;
