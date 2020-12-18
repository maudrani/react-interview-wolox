import React, { useState } from "react";
import WxButton from "../basics/WxButton";
import Loader from "../basics/loader";
import logo from "../../Assets/logo_full_color.svg";
import "../basics/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({ className }) => {
  const [launchMenu, setLaunchMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [Loading, setLoading] = useState(false);

  const loadAndClose = () => {
    setTimeout(() => {
      setLaunchMenu(false);
      setLoading(false);
    }, 2000);
  };

  window.addEventListener("scroll", () => {
    window.scrollY < 1 ? setScrolled(false) : setScrolled(true);
  });

  return (
    <div
      className={`navbar ${className} ${scrolled ? "nav-scrolled" : "null"}`}
    >
      <div
        className={`container r-sb-c`}
        id={scrolled ? "container-scrolled" : null}
      >
        <div className="logo-container r-sb-c">
          <img alt="logo" src={logo} />

          <FontAwesomeIcon
            icon={["fas", launchMenu ? "times" : "bars"]}
            size={"2x"}
            className="fc-dark menu-launcher"
            onClick={() => setLaunchMenu(launchMenu ? false : true)}
          />
        </div>

        <ul
          className={`r-sb-c fs-5 fw-2 ${
            launchMenu ? "menu-launched" : "menu-hided"
          }`}
        >
          <li>
            <a onClick={() => setLaunchMenu(false)} href="#inicio">
              Inicio
            </a>
          </li>
          <li>
            <a onClick={() => setLaunchMenu(false)} href="#beneficios">
              Beneficios
            </a>
          </li>
          <li>
            {Loading ? <Loader type="2" panel /> : null}
            <WxButton
              onClick={() => setLoading(true) || loadAndClose()}
              className={`reg-btn`}
              outline
              content="Registro"
              fontSize="6"
              fontWeight="1"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
