import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import WxButton from "../../Basics/WxButton";
import WxInput from "../../Basics/WxInput";
import WxSelector from "../../Basics/WxSelector";
import countries from "../../dB/countries";
import Slider from "react-slick";
import Loader from "../../Basics/loader";

const WxForm = ({ createPackage }) => {
  const history = useHistory();
  const [Loading, setLoading] = useState(false);

  const cancelRegistry = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push("/techlist")
    }, 2500 * Math.random());
  };


  //Slick usage
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState();
  const [slidesAmount, setSlidesAmount] = useState();

  useEffect(() => {
    setSlidesAmount(sliderRef.current.props.children.length);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    swipe: false,
    accessibility: false,
    draggable: false,
    lazyLoad: true,
    infinite: false,
    speed: 300,
    beforeChange: (current, next) => setCurrentSlide(current + 1),
    afterChange: (current) => setCurrentSlide(current + 1),
  };

  const nextSlide = (e) => {
    e.preventDefault();
    sliderRef.current.slickNext();
  };
  const prevSlide = (e) => {
    e.preventDefault();
    sliderRef.current.slickPrev();
  };

  /* -------- */

  //Input Values and Errors
  const requiredData = {
    name: "",
    last_name: "",
    country: "",
    province: "",
    mail: "",
    phone: "",
    password: "",
  };
  const [selectedCountry, setSelectedCountry] = useState(
    Object.keys(countries)[0]
  );
  const [inputsData, setInputsData] = useState({});
  const [errorMessage, setErrorMessage] = useState();
  const [valueToMatch, setValueToMatch] = useState(" ");
  const [aproovedTerms, setAproovedTerms] = useState(false);

  const getInputData = (inputName, state, value, error, label) => {
    if (state) {
      setInputsData({ ...inputsData, [inputName]: value });
    } else {
      let form = inputsData;
      delete form[inputName];
      setInputsData(form);
    }

    if (inputName === "password") {
      setValueToMatch(value);
    }

    if (!errorMessage) {
      error
        ? setErrorMessage(
            <span className="fw-2">
              {label}: <span className="fw-5">{error}</span>
            </span>
          )
        : setErrorMessage();
    } else {
      setErrorMessage();
    }
  };

  useEffect(() => {
    if (valueToMatch === "") {
      setValueToMatch(" ");
    }
  }, [valueToMatch]);

  const validateForm = (e) => {
    e.preventDefault();

    if (aproovedTerms) {
      if (
        Object.keys(inputsData).filter((data) => data === "passwordMatch")
          .length !== 0
      ) {
        if (Object.keys(inputsData).length > Object.keys(requiredData).length) {
          let sortedRequiredData = Object.keys(requiredData).sort().join();
          let sortedInputsNames = Object.keys(inputsData)
            .sort()
            .join()
            .replace(/passwordMatch(,?)/, "");

          if (sortedRequiredData === sortedInputsNames && !errorMessage) {
            sendData(inputsData);
          } else {
            setErrorMessage("Algunos datos no coinciden");
          }
        } else {
          setErrorMessage("Algunos datos no coinciden");
        }
      } else {
        setErrorMessage("Todos los datos son requeridos");
      }
    } else {
      setErrorMessage("Es necesario que apruebe nuestos términos");
    }
  };

  const sendData = (form) => {
    delete form["passwordMatch"];

    createPackage(form);
  };

  return (
    <form autoComplete="off" className="form c-sa-fs">
      <Slider ref={sliderRef} {...settings} className="form-slider">
        <div className="personaldata-form c-c-c" key={1}>
          <WxInput
            placeholder="Ingrese su nombre"
            label="Nombre"
            name="name"
            type="noun"
            className="form-item"
            sendData={getInputData}
          />
          <WxInput
            placeholder="Ingrese su apellido"
            label="Apellido"
            name="last_name"
            type="noun"
            className="form-item"
            sendData={getInputData}
          />
          <WxInput
            placeholder="Ingrese su teléfono"
            label="Teléfono"
            name="phone"
            type="tel"
            className="form-item"
            sendData={getInputData}
          />
        </div>

        <div className="country-data c-sa-c" key={2}>
          <div className="r-sa-c country">
            <label className="fs-4 fw-5" htmlFor="countries">
              País:
            </label>
            <select
              className="fs-5 fw-5"
              onLoad={(e) => setSelectedCountry(e.target.value)}
              onChange={(e) =>
                getInputData(e.target.name, true, e.target.value) ||
                setSelectedCountry(e.target.value)
              }
              name="country"
              id="countries"
            >
              {Object.keys(countries).map((country, key) => {
                return (
                  <option className="fs-5 fw-5" key={key} value={country}>
                    {country}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="r-sa-c province">
            <label className="fs-4 fw-5" htmlFor="provinces">
              Provincia:
            </label>

            <select
              className="fs-5 fw-5"
              name="province"
              id="provinces"
              onChange={(e) =>
                getInputData(e.target.name, true, e.target.value)
              }
            >
              {countries[selectedCountry].map((province, key) => {
                return (
                  <option className="fs-5 fw-5" key={key} value={province}>
                    {province}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="account-data" key={3}>
          <WxInput
            placeholder="Ingrese su correo electrónico"
            label="E-mail"
            name="mail"
            type="mail"
            className="form-item"
            sendData={getInputData}
          />
          <WxInput
            placeholder="Ingrese una contraseña"
            label="Contraseña"
            name="password"
            type="password"
            className="form-item"
            sendData={getInputData}
          />
          <WxInput
            placeholder="Repita la contraseña"
            label="Repetir contraseña"
            name="passwordMatch"
            type="passwordMatch"
            match={valueToMatch}
            className="form-item"
            errorCatcher={setErrorMessage}
            sendData={getInputData}
          />
        </div>
      </Slider>

      <div className="r-fs-c form-item">
        <WxSelector catchValue={setAproovedTerms} />
        <span className="info-text fs-6">
          Acepto los{" "}
          <a className="fw-2 fc-blue" href="#terminos">
            términos y condiciones
          </a>
        </span>
      </div>

      <div className="error-container">
        <p className="error-message fc-error fw-4">{errorMessage}</p>
      </div>

      <div className="form-item form-options r-sb-c">
        <a className="fw-3 fs-6 fc-gray" href="#cancel" onClick={cancelRegistry}>
          Cancelar
        </a>
        <WxButton
          className="btn-form r-c-c"
          outline
          fontSize="6"
          fontWeight="3"
          content="Anterior"
          color="dark"
          onClick={(e) => prevSlide(e)}
          disabled={currentSlide === 1 ? true : false}
        />
        {currentSlide === slidesAmount ? (
          <WxButton
            className="btn-form"
            fontSize="6"
            fontWeight="2"
            content="Crear"
            outline
            color="green"
            onClick={(e) => validateForm(e)}
          />
        ) : (
          <WxButton
            outline
            className="btn-form"
            color="dark"
            fontSize="6"
            fontWeight="3"
            content="Siguiente"
            onClick={(e) => nextSlide(e)}
          />
        )}
      </div>
    
      {Loading ? <Loader type="2" panel /> : null}
    </form>
  );
};

export default WxForm;
