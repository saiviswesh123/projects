import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Hero from "./Hero";
import "../../styles/home.style.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <main className="home-page-container">
        <Body />
      </main>
    </div>
  );
};

export default Home;
