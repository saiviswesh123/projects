import React from "react";
import { useState } from "react";
import "../../styles/header.style.css";

function Header() {
  const [hide, setHide] = useState(true);

  const handleHide = () => {
    setHide((prevState) => !prevState);
  };

  return (
    <nav className="bg-black p-4">
      <div className="text-white font-semibold">
        <div className="flex font-bold md:hidden">
          <div className="font-bold">
            <h1 className="text-xl p-3">AeroBooker</h1>
          </div>
          <div className="w-full flex justify-end">
            <button
              className="text-white text-xl md:hidden ml-5"
              onClick={handleHide}
            >
              &#9776;
            </button>
          </div>
        </div>

        <div className="md:flex">
          {hide && (
            <ol className="mt-4 p-3">
              <li className="m-2">
                <a href="#">Home</a>
              </li>
              <li className="m-2">
                <a href="#">Flights Available</a>
              </li>
              <li className="m-2">
                <a href="#">Book Ticket</a>
              </li>
              <li className="m-2">
                <a href="#">Boarding</a>
              </li>
              <li className="m-2">
                <a href="#">Feedback</a>
              </li>
            </ol>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
