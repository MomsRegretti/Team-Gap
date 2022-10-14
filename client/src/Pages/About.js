import React from 'react'
function About() {
  return (
    <div className="page-container" style={{ margin: "5% auto", height: "70vh", width: "50%" }}>
      <div style={{ width: "80%", margin: "auto" }}>
        <p style={{ fontFamily: "valorant" }}>About</p>
        <div style={{ display: "grid", height: "auto", width: "100%" }}>
          <p style={{ textAlign: "center", placeSelf: "center" }}>Team Canyon is my captstone project for the Software Engineering Program at Flatiron School. It was made using React for the front-end and Ruby on Rails for the back-end.</p>
          <p style={{ textAlign: "center", placeSelf: "center" }}>The Agent Selector uses the external "Valorant API" to create assets in the backend that correspond to findings made in the app's "ideation phase".</p>
          <p style={{ textAlign: "center", placeSelf: "center" }}>The recommendations were made by analyzing each agent's pick rate and win rate. Discouraged agents were determined by comparing individual pick rates between regular and pro levels of play.</p>
        </div>
      </div>

    </div>
  )
}

export default About