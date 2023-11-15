import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Hero from "./Hero";
import Footer from "../home/Footer"


const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Body />    
      <Footer />
    </div>
  );
};

export default Home;
