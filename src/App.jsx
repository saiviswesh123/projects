import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";


import "./App.css";
import FlightsAvailable from "./components/pages/FlightsAvailable";
import BookTicket from "./components/pages/BookTicket";
import Feedback from "./components/pages/Feedback";
import Boarding from "./components/pages/Boarding";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/flights-available" element={<FlightsAvailable />} />
          <Route path="/book-tickets" element={<BookTicket />} />
          <Route path="/boarding" element={<Boarding />} />
          <Route path="/feedback" element={<Feedback />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
