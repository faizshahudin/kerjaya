import React, { Component } from 'react';
import benefitIconOne from "./icons/income.png"
import benefitIconTwo from "./icons/alarm-clock.png"
import benefitIconThree from "./icons/business-partnership.png"
import benefitIconFour from "./icons/teaching.png"

function Benefits(props) {
  const benefits = [
    {
      header: "Competitive Salary",
      text: "Start earning steady income to support your lifestyle.",
      img: benefitIconOne
    },
    {
      header: "Save Time",
      text: "Stop browsing through countless job ads. #KerjaYa recommends you the right job.",
      img: benefitIconTwo
    },
    {
      header: "Job Matching",
      text: "#KerjaYa connects you to the right employer based on your profile",
      img: benefitIconThree
    },
    {
      header: "Free Coaching",
      text: "Get access to FREE coaching and training materials to get you ready for employment",
      img: benefitIconFour
    }
  ]

  return (
    <section className="benefits">
      <div className="container">
        <h2>Get Ahead with #KerjaYa</h2>
        <div className="benefits-content">
          {benefits.map((benefit) => (
            <div className="benefits-list" key={benefit.header}>
              <img src={benefit.img} alt={"Photo of " + benefit.header}></img>
              <h4>{benefit.header}</h4>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
