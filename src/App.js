import React, { Component } from 'react';
import './App.css';
import benefitIconOne from "./icons/income.png"
import benefitIconTwo from "./icons/alarm-clock.png"
import benefitIconThree from "./icons/business-partnership.png"
import benefitIconFour from "./icons/teaching.png"
import stepOne from "./images/step-1.png"
import stepTwo from "./images/step-2.png"
import stepThree from "./images/step-3.png"
import stepFour from "./images/step-4.png"
import stepFive from "./images/step-5.png"
import magazine from "./images/magazine.png"
import educloudLogo from "./images/educloud-logo.png"
import unimyLogo from "./images/unimy-logo.jpg"
import moheLogo from "./images/mohe-logo.png"
import prestariangLogo from "./images/prestariang-logo.png"
import ptptnLogo from "./images/ptptn-logo.png"
import txLogo from "./images/tx-logo.png"


function Hero(props) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Still looking for a job?</h1>
        <h3>Look no further. Begin your journey with #KerjaYa now</h3>
        <button>Get Started</button>
        <p>30 Seconds Registration | 100% Free</p>
      </div>
    </section>
  )
}

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
        <h1>Get Ahead with #KerjaYa</h1>
        <div className="benefits-content">
          {benefits.map((benefit) => (
            <div key={benefit.header}>
              <h5>{benefit.header}</h5>
              <img src={benefit.img} alt={"Photo of " + benefit.header}></img>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

function About() {
  return (
    <section className="about">
      <div className="container">
        <h1>What is #KerjaYa?</h1>
        <p>#KerjaYa is here to help all PTPTN borrowers obtain desirable jobs in
          an ever-changing employment landscape. We match you to the right job based
          on profiling and provide FREE training to help you be employment ready.
        </p>
      </div>
    </section>
  )
}

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
        <h3>If you are ready to start <strong>earning your own income,</strong>
        simply follow the 5 steps below</h3>
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

function Freebie() {
  return(
    <section className="freebie">
      <div className="freebie-content container">
        <div>
          <img src={magazine} alt={"Photo of freebie."}></img>
        </div>
        <div>
          <p>Limited Offer!</p>
          <h3>JOIN NOW AND GET YOUR FREEBIE</h3>
          <p>5 Proven Interview Techniques to Make you Stand Out From the Crowd!</p>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const questions = [
    {
      header: "How do I join/sign up?",
      text: "You can sign up here by entering your name and email address. It’s that simple."
    },
    {
      header: "I’ve signed up. What’s next?",
      text: "Great! You will hear from us shortly via email. Remember to check your inbox from time to time."
    },
    {
      header: "What is the interview process?",
      text: "The interview process will be done in-person, depending on the requirement of the prospective employers."
    },
    {
      header: "How do I get in touch with employers?",
      text: "[PLACEHOLDER]"
    },
    {
      header: "Who is TalentXchange?",
      text: "TalentXchange is the talent partner of #KerjaYa Programme. TalentXChange will help connect you to the right employers to kick start your career."
    },
    {
      header: "Are there any requirements?",
      text: "You must be a PTPTN graduated borrower."
    },
    {
      header: "What is the structure of the training? And how long is the training?",
      text: "[PLACEHOLDER]"
    },
    {
      header: "Do I have to pay for the training?",
      text: "Training will be provided for absolutely FREE of charge."
    },
    {
      header: "Is this program really FREE? Are there any hidden charges?",
      text: "Yes, this program is 100% free with no hidden charges."
    },
  ]
  return (
    <section className="faq">
      <div className="container">
        <h3>Common Questions</h3>
        <ul className="faq-content">
          {questions.map((question) => (
            <li>
              <h5>Q: {question.header}</h5>
              <p>{question.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Partners() {
  const partners = [
    {
      name: "PTPTN",
      logo: ptptnLogo
    },
    {
      name: "Ministry of Higher Education",
      logo: moheLogo
    },
    {
      name: "Prestariang",
      logo: prestariangLogo
    },
    {
      name: "EduCloud",
      logo: educloudLogo
    },
    {
      name: "Talent Xchange",
      logo: txLogo
    }
  ]



  return(
    <section className="partners">
      <div className="container">
        <h3>#KerjaYa is a colloboration between:</h3>
        <div className="partners-content">
          {partners.map((partner) => (
            <div>
              <img src={partner.logo} alt={"Photo of " + partner.name}></img>
            </div>
          ))}
        </div>
      </div>



    </section>
  )
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="header">
          <h3>#KerjaYa by PTPTN</h3>
        </header>
        <Hero />
        <Benefits />
        <About />
        <Steps />
        <Freebie />
        <FAQ />
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
