import React from "react";
import linkedinIcon from "../../assets/icons/linkedin.png";
import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";

function Contact() {
  return (
    <>
      {/* small screens */}
      <footer className="m-4 md:hidden">
        <div className="text-white p-4 rounded-lg text-center">
          <div className="">
            <div className="mt-5">
              <p className="font-bold text-2xl about-us-section-title">
                Contact Us
              </p>
              
              <p>Air India Building, Nariman Point, Mumbai 400021</p>
              <p>+91 6301621988</p>
              <p>
                <a href="#" className="text-cyan-400">
                  
                  customerservice@airindia.India
                </a>
              </p>
            </div>
            
            <p>
              <b>Customer Support:</b> +1-800-AERO-123 
              <b>Sales Inquiries:</b> +1-555-FLY-HIGH
            </p>
            
            <p>
              <b>Customer Support:</b> support@aerobooker.com 
              <b>Sales Inquiries:</b> sales@aerobooker.com
            </p>
          </div>
          

          <div>
            <h1 className="font-bold text-lg about-us-section-title">
              Follow Us
            </h1>
            {/* icons */}
            <div className="flex space-x-4 justify-center p-3">
              <img src={linkedinIcon} alt="icon" />
              <img src={facebookIcon} alt="icon" />
              <img src={instagramIcon} alt="icon" />
            </div>
          </div>
        </div>
      </footer>

      {/* large screens */}
      <footer className="hidden sm:hidden md:block">
        <div className="text-white p-4">
          <div className="flex justify-center space-x-10">

            {/* contact information */}
            <div className="text-base text-center">
              <p className="text-2xl font-bold ">Contact Information</p>
              <p className="mt-5">Indian Skies Airlines</p>
              <p>123 Airport Road, New Delhi, India</p>
              <p>+91-123-4567890</p>
              <p>
                <a href="#" className="text-blue-500">                  
                  info@indianskiesairlines.in
                </a>
              </p>
            </div>
            

            {/* legal information */}
            <div className="text-base text-center">
              <p className="font-bold text-2xl">Legal Information:</p>
              
              <p className="mt-5">
                Terms of Use:
                <span className="text-blue-500 ml-2">
                  https://www.indianskiesairlines.in/terms-of-use
                </span>
              </p>
              <p>
                Privacy Policy:
                <span className="text-blue-500 ml-2">
                  https://www.indianskiesairlines.in/privacy-policy
                </span>
              </p>
              <p>
                Cookie Policy:
                <span className="text-blue-500 ml-2">
                  https://www.indianskiesairlines.in/cookie-policy
                </span>
              </p>
            </div>
            

            {/* additional information */}
            <div className="text-base">
              <p className="text-2xl font-bold">Additional Information:</p>
              <p className="mt-5">
                Sitemap:
                <span className="text-blue-500 ml-2">
                  https://www.indianskiesairlines.in/sitemap
                </span>
              </p>
              <p>
                FAQ:
                <span className="text-blue-500 ml-2">
                  https://www.indianskiesairlines.in/faq
                </span>
              </p>
              <p>
                Contact Us:
                <span className="text-blue-500 ml-2">
                  https://www.indianskiesairlines.in/contact-us
                </span>
              </p>
            </div>
          </div>
 
          {/* follow us */}
          <div className="flex justify-center mt-5">
            <div className="">
            <h1 className="font-bold text-lg about-us-section-title text-center">
              Follow Us
            </h1>
            {/* icons */}
            <div className="flex space-x-4 justify-center p-3">
              <img src={linkedinIcon} alt="icon" />
              <img src={facebookIcon} alt="icon" />
              <img src={instagramIcon} alt="icon" />
            </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
