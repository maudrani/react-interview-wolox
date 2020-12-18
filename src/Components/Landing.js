import React from "react";
import NavBar from "./navbar/NavBar";
import Hero from "./hero/Hero";
import Promo from "./promo/Promo";
import Benefits from "./benefits/Benefits";
import Footer from "./footer/Footer";

const Landing = () => {
  return (
    <div className="landing">
      <NavBar />
      <Hero />
      <Promo />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Landing;
