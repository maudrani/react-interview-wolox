import React, { useState, useEffect } from "react";
import WxButton from "../../Basics/WxButton";
import Loader from "../../Basics/loader";
import logo from "../../../Assets/logo_full_color.svg";
import "../../Basics/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({ className, ref, references = {}}) => {
  const [launchMenu, setLaunchMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [hide , setHide] = useState(false);



  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY < 1 ? setScrolled(false) : setScrolled(true);
    });
  }, []);

  const loadAndClose = () => {
    setTimeout(() => {
      setLaunchMenu(false);
      setLoading(false);
    }, 2500 * Math.random());
  };

  function ScrollTo (e) {
    const sectionRef = e.currentTarget.getAttribute('id');
    references[sectionRef].current.scrollIntoView();

    setHide(true);
    setTimeout(() => {
      setHide(false);
    }, 1000);
  };

  return (
    <div
      ref={ref}
      className={`navbar ${className} ${scrolled ? "nav-scrolled" : null} ${
        hide ? "nav-hided" : null
      }`}
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
            <a
              onClick={(e) => setLaunchMenu(false) ||ScrollTo(e)}
              id="HeroRef"
              href="#Inicio"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              onClick={(e) => setLaunchMenu(false) ||ScrollTo(e)}
              id="BenefitsRef"
              href="#Beneficios"
            >
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
