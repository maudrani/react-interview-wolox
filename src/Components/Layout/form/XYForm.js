import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import XYButton from "../../basics/XYButton";
import XYInput from "../../basics/XYInput";
import XYSelector from "../../basics/XYSelector";
import XYList from "../../basics/XYList";
import XYError from "../../basics/XYError";
import countries from "../../dB/countries";
import Slider from "react-slick";
import Loader from "../../basics/loader";
import { useForm } from "react-hook-form";

const XYForm = ({ getFormData }) => {
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
    name: "Name",
    last_name: "Last Name",
    country: "Country",
    province: "Province",
    mail: "E-mail",
    phone: "Phone",
    password: "Password",
    terms: "Conditions",
    repeatedPassword: "Repetir Password",
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
      required: `${name} required`,
      minLength: minLength && {
        value: minLength,
        message: `The ${name} should'nt be less than ${minLength} digits`,
      },
      maxLength: maxLength && {
        value: maxLength,
        message: `The ${name} should'nt be more than ${maxLength} digits`,
      },
      pattern: pattern && {
        value: pattern,
        message: `Enter a valid ${name}`,
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
        inputsWithErrors: `Check the fields: ${matchName
          .splice(-0, matchName.length - 1)
          .join(", ")} and ${matchName[matchName.length - 1]}`,
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
          <XYInput
            placeholder={"Enter your name"}
            label="Name"
            name="name"
            type="text"
            className="form-item"
            forwardedRef={register(
              generateError({
                name: "Name",
                maxLength: 30,
                pattern: validPatterns.textOnly.pattern,
              })
            )}
            showError={errors.name ? true : false}
          />
          <XYInput
            placeholder="Enter your Last name"
            label="Last Name"
            name="last_name"
            type="text"
            className="form-item"
            forwardedRef={register(
              generateError({
                name: "Last Name",
                maxLength: 30,
                pattern: validPatterns.textOnly.pattern,
              })
            )}
            showError={errors.last_name ? true : false}
          />
          <XYInput
            placeholder="Enter your phone number"
            label="Phone"
            name="phone"
            type="number"
            className="form-item"
            maxLength={10}
            forwardedRef={register(
              generateError({
                name: "Phone",
                maxLength: 10,
              })
            )}
            showError={errors.phone ? true : false}
          />
        </div>

        <div className="country-data c-sa-c" key={2}>
          <XYList
            onChange={(e) => setSelectedCountry(e.target.value)}
            listItems={Object.keys(countries)}
            className="fs-4 fw-5 r-sa-c country"
            labelContent="Country"
          />
          <XYList
            listItems={countries[selectedCountry]}
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="fs-4 fw-5 r-sa-c country"
            labelContent="Province"
          />
        </div>

        <div className="account-data" key={3}>
          <XYInput
            placeholder="Enter your e-mail"
            label="E-mail"
            name="mail"
            type="email"
            className="form-item"
            forwardedRef={register({ required: "Mail required" })}
            showError={errors.mail ? true : false}
          />
          <XYInput
            placeholder="Create a password"
            label="Password"
            name="password"
            type="password"
            className="form-item"
            forwardedRef={register(
              generateError({
                name: "Password",
                minLength: 6,
                validate: (value) => value === watch("repeatedPassword"),
              })
            )}
            showError={errors.password ? true : false}
          />
          <XYInput
            placeholder="Repeat the password"
            label="Repeat Password"
            type="password"
            name="repeatedPassword"
            className="form-item"
            forwardedRef={register({
              required: "Repeat Password",
              validate: (value) =>
                value === watch("password") || "The passwords don't match",
            })}
            showError={errors.repeatedPassword ? true : false}
          />
        </div>
      </Slider>

      <div className="r-fs-c form-item">
        <XYSelector
          name="terms"
          forwardedRef={register({
            required: "Accept the terms and conditions",
          })}
        />
        <span  className="info-text fs-6">
          I accept the{' '}
          <a className="fw-2 fc-blue" href="#terminos">
            terms and conditions
          </a>
        </span>
      </div>

      {Object.keys(errors).length !== 0 && (
        <XYError title="Error!" content={logErrors().inputsWithErrors} />
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
          Cancel
        </a>
        <XYButton
          className="btn-form r-c-c"
          outline
          fontSize="6"
          fontWeight="3"
          content="Back"
          color="dark"
          onClick={(e) => prevSlide(e)}
          disabled={currentSlide === 1 ? true : false}
        />
        {currentSlide === slidesAmount ? (
          <XYButton
            className="btn-form"
            fontSize="6"
            fontWeight="2"
            content="Create"
            outline
            color="green"
            type="submit"
            form="main-form"
          />
        ) : (
          <XYButton
            outline
            className="btn-form"
            color="dark"
            fontSize="6"
            fontWeight="3"
            content="Next"
            onClick={(e) => nextSlide(e)}
          />
        )}
      </div>

      {Loading ? <Loader type="2" panel /> : null}
    </form>
  );
};

export default XYForm;
