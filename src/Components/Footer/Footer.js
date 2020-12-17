import React from "react";
import WxTexto from "../basics/WxText";
import WxButton from "../basics/WxButton";
import logo from "../../Assets/Ic_Wolox_Footer.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <WxTexto
          className="main-title"
          size="2"
          content="dark-2[Gracias por ] blue-2[completar el ejercicio]"
        />
        <WxTexto
          className="sub-title"
          size="4"
          weight="3"
          content="Te invitamos a ver más información"
        />
        <div className="btn-container r-c-c ">
          <WxButton
            color="blue"
            content="Conocer más"
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
