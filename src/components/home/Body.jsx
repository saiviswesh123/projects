import React from "react";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";
import bgImage from "../../assets/home-page-backgrounds/bg-1.jpg";

import "../../styles/body.style.css";
import "../../App.css";

function Body() {
  return (
    <main>
      {/* hero section image */}
      <div>
        <img src={bgImage} alt="bg-image" className="w-screen h-auto" />
      </div>

      {/* about and services sections */}
      <div className="body-container">
        <About />
        <Services />
      </div>

      {/* footer section */}
      <div className="footer--section ">
        <Footer />
      </div>
    </main>
  );
}

export default Body;
