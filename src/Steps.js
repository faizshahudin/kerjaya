import React, { Component } from 'react';
import stepOne from "./images/step-1.png"
import stepTwo from "./images/step-2.png"
import stepThree from "./images/step-3.png"
import stepFour from "./images/step-4.png"
import stepFive from "./images/step-5.png"

function Steps() {
  const steps = [
    {
      header: "Step #1",
      title: "Register",
      text: "Register with #KerjaYa and we will connect you to your career coach",
      img: stepOne
    },
    {
      header: "Step #2",
      title: "Complete Profile",
      text: "Upload your resume and take a profilling test. We will review your application and connect you to employers.",
      img: stepTwo
    },
    {
      header: "Step #3",
      title: "Attend Interview",
      text: "Sit back, wait for the employer's invitation for an interview session.",
      img: stepThree
    },
    {
      header: "Step #4",
      title: "Final Preperation",
      text: "Once you are accepted, we will help you to be employment ready via online and offline training.",
      img: stepFour
    },
    {
      header: "Step #5",
      title: "Kick-Start",
      text: "Begin your career and fulfill your potential. A bright future awaits you. Good Luck!",
      img: stepFive
    }
  ]
  return (
    <section className="steps">
      <div className="container">
        <div className="steps-header">
          <p>If you are ready to start <strong>earning your own income, </strong>
          simply follow the 5 steps below</p>
        </div>
        <div className="steps-content">
          {steps.map((step) => (
            <div className="steps-step">
              <h5>{step.header}</h5>
              <img src={step.img} alt={"Photo of " + step.title + " step"}></img>
              <h6>{step.title}</h6>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
