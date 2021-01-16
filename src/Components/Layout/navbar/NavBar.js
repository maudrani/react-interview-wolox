import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import XYButton from "../../basics/XYButton";
import Loader from "../../basics/loader";
import logo from "../../../Assets/logo_full_color.svg";
import logoSimple from "../../../Assets/logo-simple.svg";
import "../../basics/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import XYText from "../../basics/XYText";

const NavBar = ({
  className = "",
  ref,
  references = {},
  hideLinks = false,
  userData,
  setUserData,
}) => {
  const [launchMenu, setLaunchMenu] = useState(false);
  const [scrolled, setScrolled] = useState();
  const [Loading, setLoading] = useState(false);
  const [hide, setHide] = useState();
  const history = useHistory();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [favList, setFavList] = useState([]);
  const [showFavList, setShowFavList] = useState(true);

  useEffect(() => {
    userData ? setIsLoggedIn(true) : setIsLoggedIn(false);
    isLoggedIn && setFavList(userData.favList);
  }, [isLoggedIn, userData]);

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

  const loadAndGo = (where) => {
    setLoading(true);
    setTimeout(() => {
      setLaunchMenu(false);
      setLoading(false);
      history.push(`/${where}`);
    }, 2500 * Math.random());
  };

  const LogOut = ({ redirect, to }) => {
    setLoading(true);
    setTimeout(() => {
      setLaunchMenu(false);
      setLoading(false);
      setUserData("");
      redirect && history.push(`/${to}`);
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
      className={`navbar ${className} ${scrolled && " nav-scrolled "} ${
        hide && "nav-hided "
      }`}
    >
      {Loading ? <Loader type="2" panel /> : null}
      <div
        className={`container r-sb-c`}
        id={scrolled ? "container-scrolled" : null}
      >
        <div className="logo-container r-sb-c">
          <img alt="logo" src={logo} />

          <button
            className="menu-launcher r-c-c"
            onClick={() => setLaunchMenu(!launchMenu)}
          >
            <FontAwesomeIcon
              icon={["fas", launchMenu ? "times" : "bars"]}
              size={"2x"}
              className="fc-dark "
            />
          </button>
        </div>

        <ul
          className={`r-sb-c fs-5 fw-2 ${
            launchMenu ? "menu-launched" : "menu-hided"
          }`}
        >
          <li>
            <a
              onClick={(e) =>
                setLaunchMenu(false) || isLoggedIn
                  ? location.pathname !== "/"
                    ? loadAndGo("")
                    : ScrollTo(e)
                  : ScrollTo(e)
              }
              id="HeroRef"
              href="#Inicio"
            >
              Home
            </a>
          </li>

          {!hideLinks && (
            <li>
              <a
                onClick={(e) => setLaunchMenu(false) || ScrollTo(e)}
                id="BenefitsRef"
                href="#Beneficios"
              >
                About CMS
              </a>
            </li>
          )}
          {!isLoggedIn ? null : location.pathname !== "/" ? null : (
            <li>
              <a
                onClick={(e) => setLaunchMenu(false) || loadAndGo("techlist")}
                href="#Beneficios"
              >
                Technologies
              </a>
            </li>
          )}
          <li>
            {isLoggedIn && location.pathname === "/techlist" && (
              <div className="c-c-c favs-container">
                <div
                  className="c-c-fe"
                  onClick={() => setShowFavList(!showFavList)}
                >
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
                    <div className="close-favlist-container r-fe-c">
                      <span
                        className="close-favlist r-c-c fw-1 fc-blue"
                        onClick={() => setShowFavList(!showFavList)}
                      >
                        &times;
                      </span>
                    </div>
                    {favList.map((item, key) => {
                      return (
                        <div
                          key={key}
                          className="like-description fc-blue r-sb-c"
                        >
                          <p className="fs-6 fw-5 fc-dark">
                            <strong className="fc-blue">{item}</strong> Added to
                            your favlist
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
              <a
                className="navbar-name"
                href="#logout"
                onClick={() => LogOut({ redirect: true, to: "" })}
              >
                <XYText
                  size="5"
                  color="blue"
                  weight="1"
                  content={`${userData.name}`}
                />
              </a>
            ) : (
              <XYButton
                onClick={() => loadAndGo("login")}
                className={`reg-btn`}
                outline
                content="Sign Up"
                fontSize="6"
                fontWeight="1"
              />
            )}
          </li>
          <li className="hidden-menu-logo r-c-c">
            <img src={logoSimple} alt="logo" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
