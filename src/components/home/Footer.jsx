import React from "react";

import "../../styles/footer.style.css";

import linkedinIcon from "../../assets/icons/linkedin.png";
import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";

import mastercard from "../../assets/icons/mastercard.png";
import rupay from "../../assets/icons/rupay.png";
import visa from "../../assets/icons/visa.png";

function Footer() {
  return (
    <>
      {/* small screens */}
      <footer className="m-4 md:hidden">
        <div className="text-white p-4 rounded-lg text-center">
          <div className="">
            {/* contact information */}
            <div className="text-sm text-center">
              <p className="text-xl font-bold contact-us-title">
                Contact Information
              </p>
              <p className="mt-5">Indian Skies Airlines</p>
              <p>123 Airport Road, New Delhi, India</p>
              <p>+91-123-4567890</p>
              <p>
                <a href="#" className="link-color">
                  info@indianskiesairlines.in
                </a>
              </p>
            </div>
            <br />

            {/* legal information */}
            <div className="text-sm text-center">
              <p className="font-bold text-xl contact-us-title">
                Legal Information
              </p>

              <p className="mt-5">
                Terms of Use:
                <span className="link-color ml-2">
                  https://www.indianskiesairlines.in/terms-of-use
                </span>
              </p>
              <p>
                Privacy Policy:
                <span className="link-color ml-2">
                  https://www.indianskiesairlines.in/privacy-policy
                </span>
              </p>
              <p>
                Cookie Policy:
                <span className="link-color ml-2">
                  https://www.indianskiesairlines.in/cookie-policy
                </span>
              </p>
            </div>
            <br />

            {/* additional information */}
            <div className="text-sm">
              <p className="text-xl font-bold contact-us-title">
                Additional Information
              </p>
              <p className="mt-5">
                Sitemap:
                <span className="link-color ml-2">
                  https://www.indianskiesairlines.in/sitemap
                </span>
              </p>
              <p>
                FAQ:
                <span className="link-color ml-2">
                  https://www.indianskiesairlines.in/faq
                </span>
              </p>
              <p>
                Contact Us:
                <span className="link-color ml-2">
                  https://www.indianskiesairlines.in/contact-us
                </span>
              </p>
            </div>
            <br />

            {/* payment information */}
            <div className="text-sm">
              <p className="text-xl font-bold text-red-50 contact-us-title">
                Payment Information
              </p>
              <div>
                <br />
                <p className="text-base font-semibold text-gray-300">
                  Accepted Credit Cards
                </p>
                <br />
                {/* payment methods icons */}
                <div className="flex space-x-4 justify-center">
                  <img src={mastercard} alt="mastercard" />
                  <img src={rupay} alt="mastercard" />
                  <img src={visa} alt="mastercard" />
                </div>
              </div>
              <br />
              <p className="text-base text-gray-300">
                Payment is due at the time of booking.
              </p>
              <p className="text-base text-gray-300">
                We also offer EMI options for select credit cards.
              </p>
              <p className="text-base text-gray-300">
                We use SSL encryption for secure online payments.
              </p>
            </div>
          </div>
          <br />

          {/* follow us */}
          <div>
            <p className="font-bold text-lg about-us-section-title copyright-text-color">
              Follow Us
            </p>
            {/* icons */}
            <div className="flex space-x-4 justify-center p-3">
              <img src={linkedinIcon} alt="icon" />
              <img src={facebookIcon} alt="icon" />
              <img src={instagramIcon} alt="icon" />
            </div>
            <br />
            <p className="copyright-text-color">
              Copyright © 2023 AeroBooker.com
            </p>
          </div>
        </div>
      </footer>

      {/* large screens */}
      <footer className="hidden sm:hidden md:block">
        <div className="text-white p-4">
          <div className="flex justify-center space-x-10">
            {/* contact information */}
            <div className="text-base text-center">
              <p className="text-2xl font-bold contact-us-title mb-3">
                Contact Information
              </p>
              <p>Indian Skies Airlines</p>
              <p>123 Airport Road, New Delhi, India</p>
              <p>+91-123-4567890</p>
              <p>
                <a href="#" className="link-color">
                  info@indianskiesairlines.in
                </a>
              </p>
            </div>

            {/* legal information */}
            <div className="text-base text-center">
              <p className="font-bold text-2xl contact-us-title mb-3">
                Legal Information:
              </p>

              <p>
                Terms of Use:
                <span className="link-color ml-2">
                  https://www.indianskiesairlines.in/terms-of-use
                </span>
              </p>
              <p>
                Privacy Policy:
                <span className="link-color ml-2">
                  https://www.indianskiesairlines.in/privacy-policy
                </span>
              </p>
              <p>
                Cookie Policy:
                <span className="link-color ml-2">
                  https://www.indianskiesairlines.in/cookie-policy
                </span>
              </p>
            </div>

            {/* additional information */}
            <div className="text-base text-center">
              <p className="text-2xl font-bold contact-us-title mb-3">
                Additional Information:
              </p>
              <p>
                Sitemap:
                <span className="link-color ml-2">
                  https://www.indianskiesairlines.in/sitemap
                </span>
              </p>
              <p>
                FAQ:
                <span className="link-color ml-2">
                  https://www.indianskiesairlines.in/faq
                </span>
              </p>
              <p>
                Contact Us:
                <span className="link-color ml-2">
                  https://www.indianskiesairlines.in/contact-us
                </span>
              </p>
            </div>
          </div>
          <br />
          <br />
          {/* payment information */}
          <div className="text-sm text-center">
            <p className="text-xl font-bold text-red-50 contact-us-title">
              Payment Information
            </p>
            <div>
              <br />
              <p className="text-base font-semibold text-gray-300">
                Accepted Credit Cards
              </p>
              <br />
              {/* payment methods icons */}
              <div className="flex space-x-4 justify-center">
                <img src={mastercard} alt="mastercard" />
                <img src={rupay} alt="mastercard" />
                <img src={visa} alt="mastercard" />
              </div>
            </div>
            <br />
            <p className="text-base text-gray-300">
              Payment is due at the time of booking.
            </p>
            <p className="text-base text-gray-300">
              We also offer EMI options for select credit cards.
            </p>
            <p className="text-base text-gray-300">
              We use SSL encryption for secure online payments.
            </p>
          </div>

          {/* follow us */}
          <div className="flex justify-center mt-5 copyright-text-color">
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
              Copyright © 2023 AeroBooker.com
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
