import React, { Component } from 'react';
import './App.css';
import Hero from "./Hero"
import About from "./About"
import Benefits from "./Benefits"
import Steps from "./Steps"
import Freebie from "./Freebie"
import Faqs from "./Faqs"
import Partners from "./Partners"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Hero />
        <Benefits />
        <About />
        <Steps />
        <Freebie />
        <Faqs />
        <Partners />
        <footer className="footer">
          <p>Copyright © Prestariang Bhd.</p>
          <p>All rights reserved. All trademarks referenced herein are the properties of their respective owners.</p>
        </footer>
      </div>
    )
  }
}

export default App
