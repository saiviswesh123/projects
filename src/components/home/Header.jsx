import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../../styles/header.style.css";

import FlightsAvailable from "../flights-available/FlightsAvailable";

function Header() {
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide((prevState) => !prevState);
  };

  return (
    <>
      {/* navbar small screens */}
      <nav className="bg-black p-4 md:hidden">
        <div className="text-white font-semibold">
          <div className="flex font-bold">
            <div className="font-bold">
              <h1 className="text-xl p-3">AeroBooker</h1>
            </div>

            <div className="w-full flex justify-end">
              <button
                className="text-white text-xl md:hidden ml-5"
                onClick={handleHide}
              >
                &#9776
              </button>
            </div>
          </div>

          <div className="md:hidden">
            {hide && (
              <ol className="mt-4 p-3">
                <li className="m-2">Home</li>
                <li className="m-2">Flights Available</li>
                <li className="m-2">Book Ticket</li>
                <li className="m-2">Boarding</li>
                <li className="m-2">Feedback</li>
              </ol>
            )}
          </div>
        </div>
      </nav>

      {/* navbar large screens */}
      <nav className="bg-black p-4 hidden sm:hidden md:block">
        <div className="text-white font-semibold">
          <div className="font-bold">
            <div className="flex items-center">
              <div>
                <h1 className="text-xl p-3">AeroBooker</h1>
              </div>
              <div className="ml-auto">
                <ul>
                  <li>Home</li>

                  <li>Flights Available</li>

                  <li>Book Ticket</li>

                  <li>Boarding</li>

                  <li>Feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
