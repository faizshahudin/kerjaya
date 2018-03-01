import React, { Component } from 'react'
import magazine from "./images/magazine.png"

function Freebie(props) {
  const content = {
    english: {
      header: "Limited Offer!",
      subheader: "JOIN NOW AND GET YOUR FREEBIE",
      text: "The Only Info Pack You Need to Kick-start Your Career!",
      tips: ["10 Proven Tips for A Successful Interview", "Your All-in-One Resume Preperation Guide", "10 Secret Techniques to Elevate Your Communication Skills"],
      button: "Register and Claim My Freebie"
    },
    bm: {
      header: "Tawaran Terhad!",
      subheader: "PERCUMA KEPADA YANG BERDAFTAR!",
      text: "Rahsia Memulakan Kerjaya Paling Efektif",
      tips: ["10 tips temuduga dari majikan termuka", "Panduan mudah menyediakan resumt", "10 petua berguna untuk meningkatkan prestasi komunikasi"],
      button: "Tebus Hadiah Percuma Sekarang"
    }
  }

  let language = props.language

  return(
    <section className="freebie">
      <div className="freebie-content container">
        <div className="freebie-image">
          <img src={magazine} alt={"Photo of freebie."}></img>
        </div>
        <div className="freebie-text">
          <h4>{content[language].header}</h4>
          <h3>{content[language].subheader}</h3>
          <p><strong>{content[language].text}</strong></p>
          <ul>
            <li>{content[language].tips[0]}</li>
            <li>{content[language].tips[1]}</li>
            <li>{content[language].tips[2]}</li>
          </ul>
          <button>{content[language].button}</button>
        </div>
      </div>
    </section>
  )
}

export default Freebie
