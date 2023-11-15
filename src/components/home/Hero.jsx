import React from "react";
import { useState } from "react";

import "../../styles/hero.style.css";

const Hero = () => {
  const [activeSection, setActiveSection] = useState("flights");

  function handleChange(section) {
    setActiveSection(section);
  }

  return (
    <hero className="hero-section-container hidden md:block">
      <div className="hero-section-card">
        {/* hero section card top bar */}
        <div className="hero-card-size">
          <div className="bg-black text-white w-full flex">
            <button
              className={
                (activeSection === "flights") === true
                  ? "flex p-3 hotel-title flight-title"
                  : "flex p-3 hotel-title"
              }
              // className="flex hotel-title p-3"
              onClick={() => handleChange("flights")}
            >
              <span className="material-symbols-outlined mr-3">
                flight_takeoff
              </span>
              Flight
            </button>
            <button
              className={
                (activeSection === "hotels") === true
                  ? "flex p-3 hotel-title flight-title"
                  : "flex p-3 hotel-title"
              }
              // className="flex p-3 hotel-title"
              onClick={() => handleChange("hotels")}
            >
              <span className="material-symbols-outlined mr-3 ">hotel</span>
              Hotel
            </button>
            <button
              className={
                (activeSection === "carRentals") === true
                  ? "flex p-3 hotel-title flight-title"
                  : "flex p-3 hotel-title"
              }
              onClick={() => handleChange("carRentals")}
            >
              <span className="material-symbols-outlined mr-3">car_rental</span>
              Rental
            </button>
          </div>

          {/* flight section */}
          <div>
            {activeSection === "flights" && (
              <div className="bg-white p-3">
                <h1 className="text-3xl m-3">Travel the world with us</h1>
                <form action="">
                  <div className="flex">
                    <div className="m-3">
                      <label htmlFor="departure">From</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Departing from"
                        id="departure"
                        className="border p-1"
                      />
                    </div>
                    <div className="m-3">
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
            )}

            {/* hotel section */}
            {activeSection === "hotels" && (
              <div className="bg-white p-3">
                <h1 className="text-3xl m-3">Find the best hotels</h1>
                <p className="m-3">
                  Book a hotel with us and get the best fares and promotions.
                </p>
                <p className="m-3">We know hotels - we know comfort.</p>
                <button className="flight-section-button m-3 flight-title">
                  Search Hotels
                </button>
              </div>
            )}

            {/* car rental section */}
            {activeSection === "carRentals" && (
              <div className="bg-white p-3">
                <h1 className="text-3xl m-3">Best car rental in the world!</h1>
                <p className="mt-2 text-base m-3">
                  <span className="discount p-1  text-white">DISCOUNT!</span>{" "}
                  Special offer if you book today: 25% off anywhere in the world
                  with CarServiceRentalRUs
                </p>
                <form action="">
                  <input
                    type="text"
                    placeholder="Pick-up point"
                    className="border w-full p-1 m-3"
                  />
                </form>
                <button className="flight-section-button m-3 flight-title">
                  Search Availability
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </hero>
  );
};

export default Hero;
