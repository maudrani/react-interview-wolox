import React from "react";
import XYText from "../../basics/XYText";
import img from "../../../Assets/Img-Hero/Ic_ilustra_Hero.png";

const Hero = ({forwaredRef}) => {
  return (
    <div ref={forwaredRef} className="hero">
      <div className="container r-c-c">
        <div className="title-container r-fs-c">
          <XYText
            size="3"
            weight="4"
            className="title"
            content="dark-[We are ] blue-2[XINERGY] dark-[, a dedicated ] aqua-2[CMS ] dark-[development agency]"
          />
        </div>

        <div className="img-container r-c-c">
          <img className="" alt="hero-img" src={img} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
