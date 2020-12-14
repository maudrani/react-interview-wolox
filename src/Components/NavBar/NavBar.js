import React from "react";
import logo from "../../Assets/logo_full_color.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="row-flex-start-center">
        <img src={logo} alt="logo" />
      </div>

      <div className="options row-flex-end-center">
        <ul className="row-space-between-center">
          <li className="">
            <a href="#Inicio">Inicio</a>
          </li>
          <li className="">
            <a href="#Benefits">Beneficios</a>
          </li>
          <li>
            <button className="btn-blue-outline nav-btn">Registro</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
