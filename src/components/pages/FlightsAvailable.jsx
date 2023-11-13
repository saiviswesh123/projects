import React from "react";
import { useState } from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";

import "../../styles/flights.style.css";
import "../../styles/body.style.css";

const FlightsAvailable = () => {
  const [location, setLocation] = useState({
    departure: "",
    arrival: "",
  });

  function handleLocation(event) {
    const { name, value } = event.target;
    setLocation((prevLocation) => {
      return {
        ...prevLocation,
        [name]: value,
      };
    });
  }

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="flights-available-container  flex justify-center p-3">
        <div className="bg-white h-auto pb-5 p-3 m-4">
          <h className="text-center font-bold text-xl">
            Select Origin and Destination
          </h>
          <form action="" className="p-13">
            <div className="mt-4">
              <label htmlFor="departure-location" className=" font-semibold ">
                Select Departure Location
              </label>
              <select
                id="departure-location"
                name="departure"
                className="border ml-2 p-1"
                onChange={handleLocation}
                value={location.departure}
              >
                <option value="">Choose Location</option>
                <option value="New York">New York</option>
                <option value="London">London</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Dubai">Dubai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Cape Town">Cape Town</option>
                <option value="Toronto">Toronto</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="Berlin">Berlin</option>
              </select>
              <br />
              <br />
              <label htmlFor="arrival-location" className=" font-semibold ">
                Select Arrival Location
              </label>

              <select
                name="arrival"
                id="arrival-location"
                className="border ml-2 p-1"
                onChange={handleLocation}
                value={location.arrival}
              >
                <option value="">Choose Location</option>
                <option value="Los Angels">Los Angels</option>
                <option value="Paris">Paris</option>
                <option value="Sydney">Sydney</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Singapore">Singapore</option>
                <option value="Beijing">Beijing</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Mexico City">Mexico City</option>
                <option value="Rome">Rome</option>
                <option value="Istanbul">Istanbul</option>
              </select>
            </div>
          </form>

          {/* flight - 1  details */}
          <>
            {location.departure === "New York" &&
              location.arrival === "Los Angels" && (
                <table className="border border-collapsed border-slate-4 mt-5">
                  <thead>
                    <tr>
                      <th className="border border-slate-3 p-1 text-center">
                        Record
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Origin
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Designation
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Departure Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Retrun Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Adults
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Children
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Infants
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-3 p-1 text-center">
                        1
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        New York
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Los Angels
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-12-01
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-12-10
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        1
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        0
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
          </>

          {/* flight - 2 details */}
          <>
            {location.departure === "London" &&
              location.arrival === "Paris" && (
                <table className="border border-collapsed border-slate-4 mt-5">
                  <thead>
                    <tr>
                      <th className="border border-slate-3 p-1 text-center">
                        Record
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Origin
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Designation
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Departure Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Retrun Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Adults
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Children
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Infants
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-3 p-1 text-center">
                        2
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        London
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Paris
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-11-15
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-11-22
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        1
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        0
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        0
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
          </>

          {/* flight - 3 details */}
          <>
            {location.departure === "Tokyo" &&
              location.arrival === "Sydney" && (
                <table className="border border-collapsed border-slate-4 mt-5">
                  <thead>
                    <tr>
                      <th className="border border-slate-3 p-1 text-center">
                        Record
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Origin
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Designation
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Departure Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Retrun Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Adults
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Children
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Infants
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-3 p-1 text-center">
                        3
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Tokyo
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Sydney
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2024-01-05
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2024-01-15
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        3
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        1
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
          </>

          {/* flight - 4 details */}
          <>
            {location.departure === "Dubai" &&
              location.arrival === "New Delhi" && (
                <table className="border border-collapsed border-slate-4 mt-5">
                  <thead>
                    <tr>
                      <th className="border border-slate-3 p-1 text-center">
                        Record
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Origin
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Designation
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Departure Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Retrun Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Adults
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Children
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Infants
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-3 p-1 text-center">
                        4
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Dubai
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        New Delhi
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-12-08
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-12-20
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        0
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        0
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
          </>

          {/* flight - 5 details */}
          <>
            {location.departure === "Mumbai" &&
              location.arrival === "Singapore" && (
                <table className="border border-collapsed border-slate-4 mt-5">
                  <thead>
                    <tr>
                      <th className="border border-slate-3 p-1 text-center">
                        Record
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Origin
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Designation
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Departure Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Retrun Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Adults
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Children
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Infants
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-3 p-1 text-center">
                        5
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Mumbai
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Singapore
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-11-20
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-11-28
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        1
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        1
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        0
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
          </>

          {/* flight - 6 details */}
          <>
            {location.departure === "Hong Kong" &&
              location.arrival === "Beijing" && (
                <table className="border border-collapsed border-slate-4 mt-5">
                  <thead>
                    <tr>
                      <th className="border border-slate-3 p-1 text-center">
                        Record
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Origin
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Designation
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Departure Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Retrun Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Adults
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Children
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Infants
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-3 p-1 text-center">
                        6
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Hong Kong
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Beijing
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2024-02-10
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2024-02-20
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        0
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        1
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
          </>

          {/* flight - 7 details */}
          <>
            {location.departure === "Cape Town" &&
              location.arrival === "Rio de Janeiro" && (
                <table className="border border-collapsed border-slate-4 mt-5">
                  <thead>
                    <tr>
                      <th className="border border-slate-3 p-1 text-center">
                        Record
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Origin
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Designation
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Departure Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Retrun Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Adults
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Children
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Infants
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-3 p-1 text-center">
                        7
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Cape Town
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Rio de Janeiro
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-12-15
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-12-30
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        3
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        1
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        0
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
          </>

          {/* flight - 8 details */}
          <>
            {location.departure === "Toronto" &&
              location.arrival === "Mexico City" && (
                <table className="border border-collapsed border-slate-4 mt-5">
                  <thead>
                    <tr>
                      <th className="border border-slate-3 p-1 text-center">
                        Record
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Origin
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Designation
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Departure Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Retrun Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Adults
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Children
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Infants
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-3 p-1 text-center">
                        8
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Toronto
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Mexico City
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-11-25
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-12-05
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        0
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
          </>

          {/* flight - 9 details */}
          <>
            {location.departure === "Amsterdom" &&
              location.arrival === "Rome" && (
                <table className="border border-collapsed border-slate-4 mt-5">
                  <thead>
                    <tr>
                      <th className="border border-slate-3 p-1 text-center">
                        Record
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Origin
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Designation
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Departure Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Retrun Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Adults
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Children
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Infants
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-3 p-1 text-center">
                        9
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Amsterdam
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Rome
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2024-03-01
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2024-03-10
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        1
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        0
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        0
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
          </>

          {/* flight - 10  details */}
          <>
            {location.departure === "Berlin" &&
              location.arrival === "Istanbul" && (
                <table className="border border-collapsed border-slate-4 mt-5">
                  <thead>
                    <tr>
                      <th className="border border-slate-3 p-1 text-center">
                        Record
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Origin
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Designation
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Departure Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Retrun Date
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Adults
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Children
                      </th>
                      <th className="border border-slate-3 p-1 text-center">
                        Infants
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-3 p-1 text-center">
                        10
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Berlin
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        Istanbul
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-12-05
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2023-12-15
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        2
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        1
                      </td>
                      <td className="border border-slate-3 p-1 text-center">
                        0
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
          </>
        </div>
      </main>

      <footer className="footer--section">
        <Footer />
      </footer>
    </>
  );
};

export default FlightsAvailable;
