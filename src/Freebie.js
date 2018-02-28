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
          <p>5 Proven Interview Techniques to Make you Stand Out From the Crowd!</p>
          <button>Register and Claim My Freebie</button>
        </div>
      </div>
    </section>
  )
}

export default Freebie
