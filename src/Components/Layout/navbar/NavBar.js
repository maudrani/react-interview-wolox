import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import WxButton from "../../Basics/WxButton";
import Loader from "../../Basics/loader";
import logo from "../../../Assets/logo_full_color.svg";
import "../../Basics/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WxText from "../../Basics/WxText";

const NavBar = ({
  className,
  ref,
  references = {},
  hideLinks = false,
  userData,
  setUserData,
}) => {
  const [launchMenu, setLaunchMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [favList, setFavList] = useState([]);
  const [showFavList, setShowFavList] = useState(true);

  useEffect(() => {
    userData ? setIsLoggedIn(true) : setIsLoggedIn(false);
    isLoggedIn && setFavList(userData.favList);
  }, [userData, isLoggedIn]);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY !== 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrolled]);

  const loadAndGo = ({ where = "", logOut = false }) => {
    setLoading(true);
    setTimeout(() => {
      setLaunchMenu(false);
      setLoading(false);
      logOut && setUserData();
      history.push(`/${where}`);
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
          className={`r-sb-c fs-5 fw-2  ${
            launchMenu ? "menu-launched" : "menu-hided"
          }`}
        >
          {!hideLinks && (
            <li>
              <a
                onClick={(e) => setLaunchMenu(false) || ScrollTo(e)}
                id="HeroRef"
                href="#Inicio"
              >
                Inicio
              </a>
            </li>
          )}
          {!hideLinks && (
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
          {!isLoggedIn ? null : location.pathname !== "/" ? null : (
            <li>
              <a
                onClick={(e) => setLaunchMenu(false) || loadAndGo("techlist")}
                href="#Beneficios"
              >
                Tecnologías
              </a>
            </li>
          )}
          <li>
            {isLoggedIn && location.pathname === "/techlist" && (
              <div className="c-c-fe favs-container">
                <div className="c-c-fe" onClick={() => setShowFavList(!showFavList)}>
                  <FontAwesomeIcon
                    icon={["fas", "heart"]}
                    size={favList.length === 0 ? "lg" : "2x"}
                    className={`menu-launcher fc-${
                      favList.length === 0 ? "gray" : "blue"
                    } `}
                    
                  />

                  {favList.length !== 0 && (
                    <span className="favs-amount r-c-c">
                      <p className="fw-1 fc-blue">{favList.length}</p>
                    </span>
                  )}
                </div>
                {favList.length !== 0 && showFavList && (
                  <div className="likes-container c-c-c">
                    {favList.map((item, key) => {
                      return (
                        <div
                          key={key}
                          className="like-description fc-blue r-sb-c"
                        >
                          <p className="fs-6 fw-5 fc-dark">
                            <strong className="fc-blue">{item}</strong> Se
                            añadió a favoritos
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </li>
          <li>
            {isLoggedIn ? (
              <a href="#logout" onClick={() => loadAndGo({ logOut: true })}>
                <WxText
                  className="navbar-name"
                  size="5"
                  color="dark"
                  weight="1"
                  content={`${userData.name}`}
                />
              </a>
            ) : (
              <WxButton
                onClick={() => loadAndGo({ where: "login" })}
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
