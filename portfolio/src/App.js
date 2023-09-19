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
          <Home/>
          <About/>
          <Work/>
          <Skills/>
          <Contact/>
        </body>
      </div>
      <div>
      </div>
    </>
  );
}

export default App;
