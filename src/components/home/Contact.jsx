import React from "react";
import linkedinIcon from "../../assets/icons/linkedin.png";
import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";

function Contact() {
  return (
    <footer className="m-4">
      <div className="text-white p-4 rounded-lg text-center">
        <h2 className="font-bold text-lg about-us-section-title">
          Contact Us
        </h2>
        <div className="">
          <p className="mt-5">
            <b>Address: </b>
            AeroBooker Headquarters 123 Skyway Avenue Aviation City, Flyland
            12345
          </p>
          <br />
          <p>
            <b>Customer Support:</b> +1-800-AERO-123 <br />
            <b>Sales Inquiries:</b> +1-555-FLY-HIGH
          </p>
          <br />
          <p>
            <b>Customer Support:</b> support@aerobooker.com <br />
            <b>Sales Inquiries:</b> sales@aerobooker.com
          </p>
        </div>
         <br />
        <div>
          <h1 className="font-bold text-lg about-us-section-title">Follow Us</h1>
          {/* icons */}
          <div className="flex space-x-4 justify-center p-3">
            <img src={linkedinIcon} alt="icon" />
            <img src={facebookIcon} alt="icon" />
            <img src={instagramIcon} alt="icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
