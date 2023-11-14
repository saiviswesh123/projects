import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "../../styles/header.style.css"

function Header() {
  const [hide, setHide] = useState(false)

  const handleHide = () => {
    setHide((prevState) => !prevState)
  }

  return (
    <>
      {/* navbar small screens */}
      <nav className="bg-white p-4 md:hidden">
        <div className="text-white font-semibold">
          <div className="flex font-bold">
            <div className="font-bold">
              <h1 className="text-xl p-3 navbar--logo">AeroBooker</h1>
            </div>

            <div className="w-full flex justify-end">
              <button
                className="text-white text-xl md:hidden ml-5"
                onClick={handleHide}
              >
                <span className="material-symbols-outlined text-black navbar-menu">menu</span>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            {hide && (
              <ol className="mt-4 p-3 text-black">
                <li className="m-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="m-2">
                  <Link to="/flights-available">Flights Available</Link>
                </li>
                <li className="m-2">
                  <Link to="/book-tickets">Book Ticket</Link>
                </li>
                <li className="m-2">
                  <Link to="/boarding">Boarding</Link>
                </li>
                <li className="m-2">
                  <Link to="/feedback">Feedback</Link>
                </li>
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
                  <li className="text-semibold">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="text-semibold">
                    <Link to="/flights-available">Flights Available</Link>
                  </li>

                  <li className="text-semibold">
                    <Link to="/book-tickets">Book Ticket</Link>
                  </li>

                  <li className="text-semibold">
                    <Link to="/boarding">Boarding</Link>
                  </li>

                  <li className="text-semibold">
                    <Link to="/feedback">Feedback</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
