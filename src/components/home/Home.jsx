import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Hero from "./Hero";
import "../../styles/home.style.css";
import BodyMediumScreens from "./BodyMediumScreens";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="hidden sm:hidden md:block">
        <Hero />
      </section>
      <main className="home-page-container">
        <Body />
        <BodyMediumScreens />
      </main>
    </div>
  );
};

export default Home;
