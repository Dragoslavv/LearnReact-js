import React, { Component } from 'react';
import './App.css';
import Navigature from './test/test';
import Projects from './test/projects';
import DuoNavigature from './test/second-navigate';
import Section1 from './test/section1';
import Section2 from './test/section2';
import Section3 from './test/section3';
import Contact from './test/contact';
import Login from "./test/login";
import Register from "./test/register";
import {BrowserRouter as Router} from "react-router-dom";



class App extends Component {
  render() {
    return (
        <Router>
            <div>

                <Register/> <Login/> <Navigature/> <Projects/> <DuoNavigature/> <Section1/> <Section2/> <Section3/> <Contact/>

            </div>
        </Router>
    );
  }
}

export default App;