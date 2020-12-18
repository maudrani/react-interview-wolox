import React from "react";
import WxText from "../basics/WxText";
import img from "../../Assets/Img-Hero/Ic_ilustra_Hero@3x.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container r-c-c">
        <div className="title-container r-fs-c">
          <WxText
            size="3"
            weight="4"
            className="title"
            content="dark-[Bienvenido a tu ] dark-2[Entrevista Técnica ] dark-[en ] green-1[Wolox]"
          />
        </div>

        <div className="img-container r-c-fe">
          <img className="" alt="hero-img" src={img} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
