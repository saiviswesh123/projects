import React from "react";
import Header from "./components/home/Header";
import Body from "./components/home/Body";
import Hero from "./components/home/Hero";

import "./App.css";
import Contact from "./components/home/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="hero--section-container flex">
        <Hero />
        <Body />
      </main>
      <footer className="footer--section">
        <Contact />
      </footer>
    </>
  );
}

export default App;
