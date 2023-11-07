import React from "react";
import "../../styles/header.style.css";
import hamburger from "../../assets/hamburger.png";

function Header() {
  const [hide, setHide] = React.useState(true);

  function handleHide() {
    setHide((prevState) => !prevState);
  }

  return (
    <nav className="bg-black p-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-semibold">
          <h1>AeroBooker</h1>
        </div>
        <div className="text-white space-x-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div className="md:hidden"> 
            <button></button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
