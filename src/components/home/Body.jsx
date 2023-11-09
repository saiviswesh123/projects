import React from "react";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
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
      <div className="body-container">
        <About />
        <Services />
        
      </div>
      
      <div className="footer--section ">
      <Contact />
      </div>

      
    </main>
  );
}

export default Body;
