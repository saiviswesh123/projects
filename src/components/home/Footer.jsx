import React from "react";

import "../../styles/footer.style.css"

//importing social media icons
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer-section-container bg-black text-white">
      <div className="text-center p-5">
        <h1 className="text-2xl">Follow Us On</h1>
        <div className="flex justify-center gap-4 mt-4">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="mt-4">
          &copy; 2023 Travel Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
