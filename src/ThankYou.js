import React, { Component } from 'react'
import logo from "./images/jobmatching-logo.png"

class ThankYou extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <section className="thank-you">
        <img className="hero-logo" src={logo} alt={"Photo of JobMatching logo."}></img>
        <div className="thank-you-container">
          <div>
            <h1>Terima kasih kerana mendaftar!</h1>
            <p>Kami telah menghantar kata laluan sementara ke emel anda.
              Sila semak dan ikuti panduan yang diberikan bagi melengkapkan profil anda.
            </p>
          </div>
          <div>
            <button className="thank-you-button">
              Lengkapkan Profil Anda
            </button>
          </div>
          <div>
            <p>
              Anda ada sebarang pertanyaan? Sila hubungi kami.
            </p>
          </div>
          <div className="thank-you-footer">
            <p>Tidak menerima emel kami?</p>
            <button>Hantar email sekali lagi</button>
          </div>
        </div>
      </section>
    )
  }
}



export default ThankYou
