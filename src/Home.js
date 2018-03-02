import React, { Component } from 'react';
import Hero from "./Hero"
import About from "./About"
import Benefits from "./Benefits"
import Steps from "./Steps"
import Freebie from "./Freebie"
import Faqs from "./Faqs"
import Partners from "./Partners"
import Register from "./Register"

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

// Toggles the Register modal state between true and false.
  handleToggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    return (
      <div className="Home">
        <Hero
          changeLanguage={this.props.changeLanguage}
          language={this.props.language}
          toggleModal={this.handleToggleModal}
        />
        <Benefits language={this.props.language}/>
        <About toggleModal={this.handleToggleModal} language={this.props.language}/>
        <Steps language={this.props.language}/>
        <Freebie toggleModal={this.handleToggleModal} language={this.props.language}/>
        <Faqs toggleModal={this.handleToggleModal} language={this.props.language}/>
        <Partners language={this.props.language}/>
        {this.state.showModal &&
          <Register
            language={this.props.language}
            toggleModal={this.handleToggleModal}
            showModal={this.state.showModal}
          />
        }
      </div>
    )
  }
}

export default Home
