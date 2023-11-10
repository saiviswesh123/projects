import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";


const Home = () => {
  return (
    <div>
      <Header />      
      <Body />      
    </div>
  );
};

export default Home;
