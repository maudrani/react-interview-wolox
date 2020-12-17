import React from "react";
import WxButton from "../basics/WxButton";
import logo from "../../Assets/logo_full_color.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container r-sb-c">
        <div className="logo-container r-fs-c">
          <img alt="logo" src={logo} />
        </div>

        <ul className="r-sb-c fs-5 fw-2">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#inicio">Beneficios</a>
          </li>
          <li>
            <WxButton outline content="Registro" fontSize="6" fontWeight="1" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
