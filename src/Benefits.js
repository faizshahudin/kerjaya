import React, { Component } from 'react';
import benefitIconOne from "./icons/loan.png"
import benefitIconTwo from "./icons/handshake.png"
import benefitIconThree from "./icons/presentation.png"

function Benefits(props) {
  const benefits = {
    english: [
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
    ],
    bm: [
      {
        header: "Pendapatan Menarik",
        text: "Pakej gaji mengikut standard terkini",
        img: benefitIconOne
      },
      {
        header: "Kesesuaian Kerjaya",
        text: "#KerjaYa menyesuaikan dengan jawatan menerusi profil anda",
        img: benefitIconTwo
      },
      {
        header: "Bimbingan Kerjaya",
        text: "Bimbingan dan latihan disediakan PERCUMA",
        img: benefitIconThree
      }
    ]
  }

  let language = props.language

  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-content">
          {benefits[language].map((benefit) => (
            <div className="benefits-list" key={benefit.header}>
              <img src={benefit.img} alt={"Photo of " + benefit.header}></img>
              <h4>{benefit.header}</h4>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
        <hr />
    </section>
  )
}

export default Benefits
