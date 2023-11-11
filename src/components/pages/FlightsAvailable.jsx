import React from "react";
import Header from "../home/Header";
import Footer from "../"
import "../../styles/flights.style.css";

const FlightsAvailable = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="flights-available-container  flex justify-center ">
        <div className="bg-white h-auto pb-5 p-5 m-4">
          <h2 className="text-center font-bold text-2xl">Flight Search Data</h2>

          <table className="border border-collapsed border-slate-400 mt-5">
            <thead>
              <tr>
                <th className="border border-slate-300 p-2 text-center">
                  Record
                </th>
                <th className="border border-slate-300 p-2 text-center">
                  Departure City
                </th>
                <th className="border border-slate-300 p-2 text-center">
                  Arrival City
                </th>
                <th className="border border-slate-300 p-2 text-center">
                  Departure Date
                </th>
                <th className="border border-slate-300 p-2 text-center">
                  Return Date
                </th>
                <th className="border border-slate-300 p-2 text-center">
                  Adults
                </th>
                <th className="border border-slate-300 p-2 text-center">
                  Children
                </th>
                <th className="border border-slate-300 p-2 text-center">
                  Infants
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row-one */}
              <tr>
                <td className="border border-slate-300 p-2 text-center">1</td>
                <td className="border border-slate-300 p-2 text-center">
                  New York
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  Los Angeles
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-12-01
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-12-10
                </td>
                <td className="border border-slate-300 p-2 text-center">2</td>
                <td className="border border-slate-300 p-2 text-center">1</td>
                <td className="border border-slate-300 p-2 text-center">0</td>
              </tr>

              {/* row-two */}
              <tr>
                <td className="border border-slate-300 p-2 text-center">2</td>
                <td className="border border-slate-300 p-2 text-center">
                  London
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  Paris
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-11-15
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-11-22
                </td>
                <td className="border border-slate-300 p-2 text-center">1</td>
                <td className="border border-slate-300 p-2 text-center">0</td>
                <td className="border border-slate-300 p-2 text-center">0</td>
              </tr>

              {/* row-three */}
              <tr>
                <td className="border border-slate-300 p-2 text-center">3</td>
                <td className="border border-slate-300 p-2 text-center">
                  Tokyo
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  Sydney
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2024-01-05
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2024-01-15
                </td>
                <td className="border border-slate-300 p-2 text-center">3</td>
                <td className="border border-slate-300 p-2 text-center">2</td>
                <td className="border border-slate-300 p-2 text-center">1</td>
              </tr>

              {/* row-four */}
              <tr>
                <td className="border border-slate-300 p-2 text-center">4</td>
                <td className="border border-slate-300 p-2 text-center">
                  Dubai
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  New Delhi
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-12-08
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-12-20
                </td>
                <td className="border border-slate-300 p-2 text-center">2</td>
                <td className="border border-slate-300 p-2 text-center">0</td>
                <td className="border border-slate-300 p-2 text-center">0</td>
              </tr>

              {/* row-five */}
              <tr>
                <td className="border border-slate-300 p-2 text-center">5</td>
                <td className="border border-slate-300 p-2 text-center">
                  Mumbai
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  Singapore
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-11-20
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-11-28
                </td>
                <td className="border border-slate-300 p-2 text-center">1</td>
                <td className="border border-slate-300 p-2 text-center">1</td>
                <td className="border border-slate-300 p-2 text-center">0</td>
              </tr>

              {/* row-six */}
              <tr>
                <td className="border border-slate-300 p-2 text-center">6</td>
                <td className="border border-slate-300 p-2 text-center">
                  Hong
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  Kong Beijing
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2024-02-10
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2024-02-20
                </td>
                <td className="border border-slate-300 p-2 text-center">2</td>
                <td className="border border-slate-300 p-2 text-center">0</td>
                <td className="border border-slate-300 p-2 text-center"></td>
              </tr>

              {/* row-seven */}
              <tr>
                <td className="border border-slate-300 p-2 text-center">7</td>
                <td className="border border-slate-300 p-2 text-center">
                  Cape Town
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  Rio de Janeiro
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-12-15
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-12-30
                </td>
                <td className="border border-slate-300 p-2 text-center">3</td>
                <td className="border border-slate-300 p-2 text-center">1</td>
                <td className="border border-slate-300 p-2 text-center">0</td>
              </tr>

              {/* row-eight */}
              <tr>
                <td className="border border-slate-300 p-2 text-center">8</td>
                <td className="border border-slate-300 p-2 text-center">
                  Toronto
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  Mexico City
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-11-25
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-12-05
                </td>
                <td className="border border-slate-300 p-2 text-center">2</td>
                <td className="border border-slate-300 p-2 text-center">2</td>
                <td className="border border-slate-300 p-2 text-center">0</td>
              </tr>

              {/* row-nine */}
              <tr>
                <td className="border border-slate-300 p-2 text-center">9</td>
                <td className="border border-slate-300 p-2 text-center">
                  Amsterdam
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  Rome
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2024-03-01
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2024-03-10
                </td>
                <td className="border border-slate-300 p-2 text-center">1</td>
                <td className="border border-slate-300 p-2 text-center">0</td>
                <td className="border border-slate-300 p-2 text-center">0</td>
              </tr>

              {/* row-nine */}
              <tr>
                <td className="border border-slate-300 p-2 text-center">10</td>
                <td className="border border-slate-300 p-2 text-center">
                  Berlin
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  Istanbul
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-12-05
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  2023-12-15
                </td>
                <td className="border border-slate-300 p-2 text-center">2</td>
                <td className="border border-slate-300 p-2 text-center">1</td>
                <td className="border border-slate-300 p-2 text-center">0</td>
              </tr>

            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default FlightsAvailable;
