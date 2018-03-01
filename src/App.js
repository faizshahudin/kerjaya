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
  constructor(props) {
    super(props)
    this.state = {
      language: "english"
    }
  }

  changeLanguage = (language) => {
    this.setState({ language: language })
  }

  render() {
    console.log(this.state.language)
    return (
      <div className="App">
        <Hero
          changeLanguage={this.changeLanguage}
          language={this.state.language}
        />
        <Benefits language={this.state.language}/>
        <About language={this.state.language}/>
        <Steps language={this.state.language}/>
        <Freebie language={this.state.language}/>
        <Faqs language={this.state.language}/>
        <Partners language={this.state.language}/>
        <footer className="footer">
          <p>Copyright © Prestariang Bhd.</p>
          <p>All rights reserved. All trademarks referenced herein are the properties of their respective owners.</p>
        </footer>
      </div>
    )
  }
}

export default App
