import React from "react";
import XYTexto from "../../basics/XYText";
import XYButton from "../../basics/XYButton";
import logo from "../../../Assets/logo-simple.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <XYTexto
          className="main-title"
          size="2"
          content="dark-2[Want to know more about ] blue-2[XINERGY ] dark-2[?]"
        />
        <XYTexto
          className="sub-title"
          size="4"
          weight="3"
          content="green-1[Read ] dark-[about our ] blue-1[history]"
        />
        <div className="btn-container r-c-c ">
          <XYButton
            color="blue"
            content="About us"
            fontSize="5"
            fontWeight="1"
          />
        </div>
        <div className="logo-container c-fe-c">
          <img alt="simple-logo" className="logo" src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
