import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "../../dB/useLocalStorage";
import { useLocation } from "react-router-dom";
import WxButton from "../../Basics/WxButton";
import Loader from "../../Basics/loader";
import logo from "../../../Assets/logo_full_color.svg";
import "../../Basics/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WxText from "../../Basics/WxText";
import WxList from "../../Basics/WxList";

const NavBar = ({ className, ref, references = {}, hideLinks = false }) => {
  const [launchMenu, setLaunchMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const [userData, setUserData] = useLocalStorage("user", "");
  const [favList, setFavList] = useLocalStorage("favs", []);

  const clearFavs = () => {
    setFavList([]);
  };

  const onScroll = () => {
    const scrollCheck = window.scrollY > 10;
    if (scrollCheck !== scrolled) {
      setScrolled(scrollCheck);
    }
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", onScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const loadAndGo = (where) => {
    setLoading(true);
    setTimeout(() => {
      setLaunchMenu(false);
      setLoading(false);
      where ? history.push(`/${where}`) : history.push("/");
    }, 2500 * Math.random());
  };

  function ScrollTo(e) {
    const sectionRef = e.currentTarget.getAttribute("id");
    references[sectionRef].current.scrollIntoView();

    setHide(true);
    setTimeout(() => {
      setHide(false);
    }, 1000);
  }

  return (
    <div
      ref={ref}
      className={`navbar ${className} ${scrolled ? "nav-scrolled" : null} ${
        hide ? "nav-hided" : null
      }`}
    >
      {Loading ? <Loader type="2" panel /> : null}
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
          {!userData ? null : location.pathname !== "/" ? null : (
            <li>
              <a
                onClick={(e) => setLaunchMenu(false) || loadAndGo("techlist")}
                href="#Beneficios"
              >
                Tecnologías
              </a>
            </li>
          )}
          {hideLinks ? null : (
            <li>
              <a
                onClick={(e) => setLaunchMenu(false) || ScrollTo(e)}
                id="HeroRef"
                href="#Inicio"
              >
                Inicio
              </a>
            </li>
          )}{" "}
          {hideLinks ? null : (
            <li>
              <a
                onClick={(e) => setLaunchMenu(false) || ScrollTo(e)}
                id="BenefitsRef"
                href="#Beneficios"
              >
                Beneficios
              </a>
            </li>
          )}
          <li>
            {userData ? (
              <div className="r-sb-c userInterface">
                {location.pathname !== "/techlist" ? null : !favList ? null : (
                  <WxList
                    className="r-sa-c fav-list"
                    listFontSize="5"
                    labelContent="FavList"
                    listItems={favList}
                  />
                )}
                <a
                  href="#logout"
                  onClick={() => loadAndGo() || setUserData() || clearFavs()}
                >
                  <WxText
                    className="reg-btn navbar-name"
                    size="5"
                    color="dark"
                    weight="1"
                    content={userData.name}
                  />
                </a>
              </div>
            ) : (
              <WxButton
                onClick={() => loadAndGo("login")}
                className={`reg-btn`}
                outline
                content="Registro"
                fontSize="6"
                fontWeight="1"
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
