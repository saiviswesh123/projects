import React from "react";
import Header from "./components/home/Header";
import Body from "./components/home/Body";
import Hero from "./components/home/Hero";


import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="home--page-sections-container">
         <Body />
      </main>
    </>
  );
}

export default App;
