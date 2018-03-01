import React, { Component } from 'react'
import magazine from "./images/magazine.png"


function Freebie() {
  return(
    <section className="freebie">
      <div className="freebie-content container">
        <div className="freebie-image">
          <img src={magazine} alt={"Photo of freebie."}></img>
        </div>
        <div className="freebie-text">
          <h4>Limited Offer!</h4>
          <h3>JOIN NOW AND GET YOUR FREEBIE</h3>
          <p><strong>The Only Info Pack You Need to Kick-start Your Career!</strong></p>
          <ul>
            <li>10 Proven Tips for A Successful Interview</li>
            <li>Your All-in-One Resumt Preperation Guide</li>
            <li>10 Secret Techniques to Elevate Your Communication Skills</li>
          </ul>
          <button>Register and Claim My Freebie</button>
        </div>
      </div>
    </section>
  )
}

export default Freebie
