import React, { useRef } from "react";
import NavBar from "./Layout/navbar/NavBar";
import Hero from "./Modules/hero/Hero";
import Promo from "./Modules/promo/Promo";
import Benefits from "./Modules/benefits/Benefits";
import Footer from "./Layout/footer/Footer";

const Landing = () => {
  const BenefitsRef = useRef(null);
  const HeroRef = useRef(null);

  return (
    <div className="landing">
      <NavBar references={{ BenefitsRef, HeroRef }} />
      <Hero forwaredRef={HeroRef} />
      <Promo />
      <Benefits forwardedRef={BenefitsRef} />
      <Footer />
    </div>
  );
};

export default Landing;
