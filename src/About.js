import React, { Component } from 'react';

let About = (props) => {
  const content = {
    english: {
      header: "Ready for a new beginning?",
      button: "Get Started"
    },
    bm: {
      header: "Bersedia untuk permulaan baharu?",
      button: "Mula"
    }
  }
  let language = props.language
  return (
    <section className="about">
      <div className="about-content container">
        <h2>{content[language].header}</h2>
        <button>{content[language].button}</button>
      </div>
    </section>
  )
}

export default About
