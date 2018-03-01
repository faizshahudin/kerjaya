import React, { Component } from 'react';
import './App.css';
import Home from "./Home"
import Register from "./Register"
import { Route } from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: "bm"
    }
  }

  changeLanguage = (language) => {
    this.setState({ language: language })
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <Home
          language={this.state.language}
          changeLanguage={this.changeLanguage}
        />
        )} />
        <Route path="/register" render={() => (
          <Register
          language={this.state.language}
          />
        )} />
        <footer className="footer">
          <p>Copyright © Prestariang Bhd.</p>
          <p>All rights reserved. All trademarks referenced herein are the properties of their respective owners.</p>
        </footer>
      </div>
    )
  }
}

export default App
