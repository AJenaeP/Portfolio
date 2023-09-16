import * as React from 'react';
import './App.css';
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Work from './components/work'
import Skills from './components/skills'
import Contact from './components/contact'

function App() {

  return (
    <>
      <div className="App">
        <body>
          <Header/>
          {/* <span id="home-anchor"></span> */}
          <Home/>
          {/* <span id="about-anchor"></span> */}
          <About/>
          {/* <span id="work-anchor"></span> */}
          <Work/>
          {/* <span id="skills-anchor"></span> */}
          <Skills/>
          {/* <span id="contact-anchor"></span> */}
          <Contact/>
        </body>

      </div>
      <div>
      </div>
    </>
  );
}

export default App;
