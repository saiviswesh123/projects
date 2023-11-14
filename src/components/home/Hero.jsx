import React from "react";
import { useState } from "react";

import "../../styles/home.style.css";
import "../../styles/hero.style.css";

const Hero = () => {
  return (
    <section className="hero-section-container sm:hidden md:block">
      <div className="grid place-items-center">
        {/* hero section card top bar */}
        <div className="hero-section-card">
          <div className="bg-black text-white space-x-4 w-full p-2 flex justify-center">
            <p className="flex flight-title p-2">
              <span className="material-symbols-outlined mr-3">
                flight_takeoff
              </span>
              Flight
            </p>

            <p className="flex flight-title p-2">
              <span className="material-symbols-outlined mr-3">hotel</span>Hotel
            </p>
            <p className="flex flight-title p-2">
              <span className="material-symbols-outlined mr-3">car_rental</span>
              Rental
            </p>
          </div>
          {/* flight section */}

          <div className="bg-white p-3" id="flight-section">
            <h1 className="text-2xl mt-5">Travel the world with us</h1>
            <form action="">
              <div className="flex">
                <div className="m-3 mt-5">
                  <label htmlFor="departure">From</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Departing from"
                    id="departure"
                    className="border p-1"
                  />
                </div>
                <div className="m-3 mt-5">
                  <label htmlFor="arrival">To</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Arriving at"
                    id="arrival"
                    className="border p-1"
                  />
                </div>
              </div>
              <button className="flight-section-button m-3 flight-title">
                Search and find dates
              </button>
            </form>
          </div>

          {/* hotel section */}
          {hotel && (
            <div className="bg-white p-3">
              <h1 className="text-2xl mt-5">Find the best hotels</h1>
              <p>Book a hotel with us and get the best fares and promotions.</p>
              <p>We know hotels - we know comfort.</p>
              <button className="flight-section-button m-3 flight-title">
                Search Hotels
              </button>
            </div>
          )}

          {/* car rental section */}
          <div className="bg-white p-3">
            <h1 className="text-2xl mt-5">Best car rental in the world!</h1>
            <p>
              <span className="discount p-1">DISCOUNT!</span> Special offer if
              you book today: 25% off anywhere in the world with
              CarServiceRentalRUs
            </p>
            <form action="">
              <input
                type="text"
                placeholder="Pick-up point"
                className="border w-full p-1"
              />
            </form>
            <button className="flight-section-button m-3 flight-title">
              Search Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
