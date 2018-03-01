import React, { Component } from 'react';
import educloudLogo from "./images/educloud-logo.png"
import unimyLogo from "./images/unimy-logo.jpg"
import moheLogo from "./images/mohe-logo.png"
import prestariangLogo from "./images/prestariang-logo.png"
import ptptnLogo from "./images/ptptn-logo.png"
import txLogo from "./images/tx-logo.png"

function Partners(props) {
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

  const content = {
    english: "#KerjaYa is a colloboration between:",
    bm: "#JobMatching adalah program kerjasama antara"
  }

  let language = props.language

  return(
    <section className="partners">
      <div className="container">
        <h3>{content[language]}</h3>
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

export default Partners
