import React from "react";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Promo from "./Promo/Promo";
import BenefitsPromo from "./Benefits/BenefitsPromo";
import Footer from "./Footer/Footer";

import landingMockup from "../Assets/LandingV3.png";

const Landing = () => {
  return (
    <div>
      <div className="nav-hero-screen">
        <NavBar />
        <Hero />
      </div>
      <Promo />
      <BenefitsPromo />
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
