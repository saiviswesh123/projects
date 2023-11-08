import React from "react";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

import "../../styles/body.style.css";

function Body() {
   return (
      <main className="">
         <About />
         <Services />
         
      </main>
   );
}

export default Body;