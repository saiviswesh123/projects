import React from 'react'
import Header from '../home/Header'
import Footer from "../home/Footer"

import "../../styles/boarding.style.css"

const Boarding = () => {
  return (
    <>
      <Header />
      <div className="boarding-section-container"></div>
      <footer className="footer--section">
        <Footer />
      </footer>
    </>
  )
}

export default Boarding
