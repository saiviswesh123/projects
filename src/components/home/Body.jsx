import React from "react";

import "../../styles/body.style.css";
import "../../App.css";

//importing social media icons
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";

function Body() {
  return (
    <main>
      {/* offers section */}
      <section>
        <div className="p-3">
          <h3 className="text-3xl">Good Offers Right Now</h3>
          <h6 className="text-base ml-1">
            Up to <strong>50%</strong> discount
          </h6>
        </div>
        {/* places */}
        <div>
          <div className="place-1">
            <p className="text-white p-3 text-2xl">Cinque Terre</p>
          </div>
          <div className="place-2">
            <p className="text-white p-3 text-2xl">New York</p>
          </div>
          <div className="place-3">
            <p className="text-white p-3 text-2xl">San Francisco</p>
          </div>
          <div className="place-4">
            <p className="text-white p-3 text-2xl">Pisa</p>
          </div>
          <div className="place-5">
            <p className="text-white p-3 text-2xl">Paris</p>
          </div>
        </div>
      </section>

      {/* explore nature section */}
      <section>
        <div className="p-3">
          <h1 className="text-3xl">Explore Nature</h1>
          <h6 className="text-lg">
            Travel with us and see nature at its finest.
          </h6>
        </div>
        {/* places */}
        
        <div className="norway text-center">
          <div className="bg-white p-3 card">
            <h1 className="text-3xl">West Coast, Norway</h1>
            <p className="text-sm m-3">
              The Majestic West Coast of Norway: A Symphony of Fjords and Oceans
            </p>
            <button className="buy-tickets-button m-3">Buy Tickets</button>
          </div>
        </div>

        <div className="mountains text-center">
          <div className="bg-white p-3 card">
            <h1 className="text-3xl">Mountains, Austria</h1>
            <p className="text-sm m-3">
              Australia's Alpine Beauty: Exploring the Majestic Mountain
              Landscapes Down Under
            </p>
            <button className="buy-tickets-button m-3">Buy Tickets</button>
          </div>
        </div>

      </section>      

      {/* newsletter */}
      <section>
        <div className="bg-black text-white p-5 m-4">
          <h1 className="text-3xl m-2">Get the best offers first!</h1>
          <p className="m-2">Join our newsletter.</p>
          <label htmlFor="email" className="m-2">
            E-mail
          </label>
          <br />
          <input
            type="email"
            placeholder="Your Email Address"
            id="email"
            className="border m-2 p-2 w-full"
          />
          <br />
          <button className="subscribe-button m-2">Subscribe</button>
        </div>
      </section>

      {/* contact section */}
      <section>
        <div className="p-5">
          <h1 className="text-3xl text-center">Contact</h1>
          <p className="text-base text-center">Let us book your next trip!</p>
          <p className="mt-10 flex">
            <span className="material-symbols-outlined mr-2">location_on</span>
            Chicago, US
          </p>
          <p className="mt-3 flex">
            <span className="material-symbols-outlined mr-2">call</span>Phone:
            +00 151515
          </p>
          <p className="mt-3 flex">
            <span className="material-symbols-outlined mr-2">mail</span>Email:
            mail@mail.com
          </p>
          <form action="">
            <input
              type="text"
              placeholder="Name"
              className="border p-2 w-full mt-4"
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 w-full mt-4"
            />
            <br />
            <input
              type="text"
              placeholder="Message"
              className="border p-2 w-full mt-4"
            />
            <br />
            <button className="bg-black p-3 mt-3 text-white buy-tickets-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      
    </main>
  );
}

export default Body;
