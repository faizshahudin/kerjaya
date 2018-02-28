import React, { Component } from 'react';

function Hero(props) {
  return (
    <header className="hero">
      <div className="hero-logo">#KerjaYa</div>
      <div className="hero-language">
        <span>Bahasa Melayu</span> | <span>English</span>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1>We find you a job and train you to start your career</h1>
          <p className="hero-subheader">#KerjaYa is the only programme that invests in your potential to land the job that you need.</p>
          <button>Get Hired</button>
          <p className="hero-text">30 Seconds Registration | 100% Free</p>
        </div>
      </div>
    </header>
  )
}

export default Hero
