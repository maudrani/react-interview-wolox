import React from "react";
import Enunciate from "../SubComponents/Enunciate";
import Banner from "../SubComponents/Banner";
import image from "../../Assets/Img Hero/Ic_ilustra_Hero@3x.png";

const Hero = () => {
  return (
    <div className="hero">
      <Enunciate
        containerClass=" enunciate-container"
        enunciateClass=" enunciate-big column-flex-end-center fw-5"
        content={
          <span>
            Bienvenido a tu{" "}
            <span className="fw-3 fc-blue">Entrevista Técnica</span> en{" "}
            <span className="fw-2 fc-green">Wolox</span>
          </span>
        }
      />

      <Banner
        alt="hero-image"
        containerClass=" row-start-flex-start img-container"
        imgClass="  img-hero row-flex-start-flex-start"
        src={image}
      />
    </div>
  );
};

export default Hero;
