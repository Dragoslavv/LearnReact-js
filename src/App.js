import React, { Component } from 'react';
import './App.css';
import Navigature from './test/test';
import Projects from './test/projects';
import DuoNavigature from './test/second-navigate';
import Section1 from './test/section1';
import Section2 from './test/section2';
import Contact from './test/contact';


class App extends Component {
  render() {
    return (
        <div>
            <Navigature/> <Projects/> <DuoNavigature/> <Section2/> <Section1/> <Contact/>
        </div>
    );
  }
}

export default App;
