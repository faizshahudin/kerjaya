import React, { Component } from 'react';

function Hero(props) {
  const content = {
    english: {
      header: "We find you a job and train you to start your career",
      subheader: "#KerjaYa is the only programme that invests in your potential to land the job that you need.",
      button: "Get Hired",
      text: "30 Seconds Registration | 100% Free"
    },
    bm: {
      header: "Masih Mencari Kerja?",
      subheader: "Berhenti mencari. Disinilah bermulanya kerjaya anda dengan #JobMatching",
      button: "Mula Di Sini",
      text: "30 saat pendaftaran | 100% PERCUMA"
    }
  }
  let language = props.language

  return (
    <header className="hero">
      <div className="hero-logo">#KerjaYa</div>
      <div className="hero-language">
        <select
          onChange={(e) => {props.changeLanguage(e.target.value)}}>
          <option value="english">English</option>
          <option value="bm">Bahasa Melayu</option>
        </select>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1>{content[language].header}</h1>
          <p className="hero-subheader">{content[language].subheader}</p>
          <button>{content[language].button}</button>
          <p className="hero-text">{content[language].text}</p>
        </div>
      </div>
    </header>
  )
}

export default Hero
