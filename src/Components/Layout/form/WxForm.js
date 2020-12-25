import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import WxButton from "../../Basics/WxButton";
import WxInput from "../../Basics/WxInput";
import WxSelector from "../../Basics/WxSelector";
import WxList from "../../Basics/WxList";
import WxError from "../../Basics/WxError";
import countries from "../../dB/countries";
import Slider from "react-slick";
import Loader from "../../Basics/loader";
import { useForm } from "react-hook-form";

const WxForm = ({ getFormData }) => {
  const history = useHistory();
  const [Loading, setLoading] = useState(false);

  const cancelRegistry = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push("/");
    }, 2500 * Math.random());
  };

  //Slick usage
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slidesAmount, setSlidesAmount] = useState();

  useEffect(() => {
    setSlidesAmount(sliderRef.current.props.children.length);
  }, [sliderRef]);

  const settings = {
    dots: true,
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

  //Setting Form
  const dataKeys = {
    name: "Nombre",
    last_name: "Apellido",
    country: "Pais",
    province: "Provincia",
    mail: "E-mail",
    phone: "Teléfono",
    password: "Contraseña",
    terms: "Términos",
    repeatedPassword: "Repetir Contraseña",
  };
  const [selectedCountry, setSelectedCountry] = useState(
    Object.keys(countries)[0]
  );
  const [selectedProvince, setSelectedProvince] = useState(
    countries[selectedCountry][0]
  );

  const { register, handleSubmit, watch, errors } = useForm();
  const validPatterns = {
    textOnly: {
      pattern: /^[A-Za-z]+$/i,
    },
    email: {
      pattern: /^[a-zA-Z0-9._+-]+[^.@]@\w+\.[a-z.]+/i,
    },
  };
  const generateError = ({ name, minLength, maxLength, pattern }) => {
    return {
      required: `${name} requerido`,
      minLength: minLength && {
        value: minLength,
        message: `El ${name} no debe poseer menos de ${minLength} caracteres`,
      },
      maxLength: maxLength && {
        value: maxLength,
        message: `El ${name} no debe poseer mas de ${maxLength} caracteres`,
      },
      pattern: pattern && {
        value: pattern,
        message: `Ingrese un ${name} válido`,
      },
    };
  };

  useEffect(() => {
    setSelectedProvince(countries[selectedCountry][0]);
  }, [selectedCountry]);

  const logErrors = () => {
    if (Object.keys(errors).length !== 0) {
      let inputsWithErrors = Object.keys(errors).reverse();
      let firstError =
        errors[inputsWithErrors[inputsWithErrors.length - 1]].message;

      let matchName = inputsWithErrors.map((input) => {
        return dataKeys[input];
      });

      return {
        inputsWithErrors: `Revise los campos: ${matchName
          .splice(-0, matchName.length - 1)
          .join(", ")} y ${matchName[matchName.length - 1]}`,
        firstError: firstError,
      };
    }
  };

  const onSubmit = (data) => {
    getFormData({
      ...data,
      country: selectedCountry,
      province: selectedProvince,
      favList: [],
    });
  };

  return (
    <form
      id="main-form"
      onSubmit={handleSubmit(onSubmit)}
      className="form c-sa-fs"
    >
      <Slider ref={sliderRef} {...settings} className="form-slider">
        <div className="personaldata-form c-c-c" key={1}>
          <WxInput
            placeholder={"Ingrese su nombre"}
            label="Nombre"
            name="name"
            type="text"
            className="form-item"
            forwardedRef={register(
              generateError({
                name: "Nombre",
                maxLength: 30,
                pattern: validPatterns.textOnly.pattern,
              })
            )}
            showError={errors.name ? true : false}
          />
          <WxInput
            placeholder="Ingrese su apellido"
            label="Apellido"
            name="last_name"
            type="text"
            className="form-item"
            forwardedRef={register(
              generateError({
                name: "Apellido",
                maxLength: 30,
                pattern: validPatterns.textOnly.pattern,
              })
            )}
            showError={errors.last_name ? true : false}
          />
          <WxInput
            placeholder="Ingrese su teléfono"
            label="Teléfono"
            name="phone"
            type="number"
            className="form-item"
            maxLength={10}
            forwardedRef={register(
              generateError({
                name: "Teléfono",
                maxLength: 10,
              })
            )}
            showError={errors.phone ? true : false}
          />
        </div>

        <div className="country-data c-sa-c" key={2}>
          <WxList
            onChange={(e) => setSelectedCountry(e.target.value)}
            listItems={Object.keys(countries)}
            className="fs-4 fw-5 r-sa-c country"
            labelContent="País"
          />
          <WxList
            listItems={countries[selectedCountry]}
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="fs-4 fw-5 r-sa-c country"
            labelContent="Provincia"
          />
        </div>

        <div className="account-data" key={3}>
          <WxInput
            placeholder="Ingrese su correo electrónico"
            label="E-mail"
            name="mail"
            type="email"
            className="form-item"
            forwardedRef={register({ required: "Mail requerido" })}
            showError={errors.mail ? true : false}
          />
          <WxInput
            placeholder="Ingrese una contraseña"
            label="Contraseña"
            name="password"
            type="password"
            className="form-item"
            forwardedRef={register(
              generateError({
                name: "Contraseña",
                minLength: 6,
                validate: (value) => value === watch("repeatedPassword"),
              })
            )}
            showError={errors.password ? true : false}
          />
          <WxInput
            placeholder="Repita la contraseña"
            label="Repetir contraseña"
            type="password"
            name="repeatedPassword"
            className="form-item"
            forwardedRef={register({
              required: "Repita la contraseña",
              validate: (value) =>
                value === watch("password") || "No coincide con la contraseña",
            })}
            showError={errors.repeatedPassword ? true : false}
          />
        </div>
      </Slider>

      <div className="r-fs-c form-item">
        <WxSelector
          name="terms"
          forwardedRef={register({
            required: "Acepte los términos y condiciones.",
          })}
        />
        <span className="info-text fs-6">
          Acepto los{" "}
          <a className="fw-2 fc-blue" href="#terminos">
            términos y condiciones
          </a>
        </span>
      </div>

      {Object.keys(errors).length !== 0 && (
        <WxError title="Error!" content={logErrors().inputsWithErrors} />
      )}
      <div className="fc-error">
        {Object.keys(errors).length !== 0 && logErrors().firstError}{" "}
      </div>
      <div className="form-item form-options r-sb-c">
        <a
          className="fw-3 fs-6 fc-gray"
          href="#cancel"
          onClick={cancelRegistry}
        >
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
            type="submit"
            form="main-form"
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
