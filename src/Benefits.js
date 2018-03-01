import React, { Component } from 'react';
import benefitIconOne from "./icons/loan.png"
import benefitIconTwo from "./icons/handshake.png"
import benefitIconThree from "./icons/presentation.png"

function Benefits(props) {
  const benefits = [
    {
      header: "Competitive Salary",
      text: "Start earning steady income to support your lifestyle.",
      img: benefitIconOne
    },
    {
      header: "Job Matching",
      text: "#KerjaYa connects you to the right employer based on your profile",
      img: benefitIconTwo
    },
    {
      header: "Free Coaching",
      text: "Get access to FREE coaching and training materials to get you ready for employment",
      img: benefitIconThree
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
