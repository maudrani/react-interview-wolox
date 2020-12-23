import React, { useState, useEffect } from "react";

const WxInput = ({
  className,
  color = "blue",
  label = "label",
  type = "input",
  placeholder = "",
  name = label,
  id = label,
  required = false,
  fontSize = "4",
  fontWeight = "5",
  labelFontSize = "5",
  fontColor = "dark",
  maxLength,
  minLength = 6,
  sendData,
  match,
  forwardedRef,
  errorCatcher,
  onChange,
}) => {
  const [showError, setShowError] = useState(false);
  const [actualMatchValue, setActualMatchValue] = useState();

  const validTypes = {
    tel: {
      finderType: "include",
      finder: /^\+?\d{7,15}$/m,
      error: "Solo números. Minimo 6, máximo 15",
    },
    noun: {
      finderType: "exlude",
      finder: /^(\s{1})|[^a-zA-Z\s:]|(\s{2,})/gim,
      error: "Hay caracteres no válidos",
    },
    mail: {
      finderType: "include",
      finder: /^[a-zA-Z0-9._+-]+[^.@]@\w+\.[a-z.]+/i,
      error: "El mail debe tener el formato: ****@***.***",
    },
    password: {
      finderType: "include",
      finder: `[\\w\\W]{${minLength},}[^\\s]`,
      error: `Mínimo ${minLength} caractéres, sin espacios al final`,
    },
    passwordMatch: {
      finderType: "include",
      finder: `${match}$`,
      error: `Los datos no coinciden`,
    },
  };

  const startValidation = (event) => {
    const inputValue = event.target.value;
    let isValidType = false;

    Object.keys(validTypes).find((validType) => validType === type) !==
    undefined
      ? (isValidType = true)
      : (isValidType = false);

    if (isValidType) {
      Validate(inputValue);
    }
  };

  function Validate(input) {
    const { finderType, finder, error } = validTypes[type];

    if (finderType === "include") {
      if (input === "") {
        setShowError(false);
        sendData(name, false, input, null, label);
      } else {
        input.search(finder) === -1
          ? sendData(name, false, input, error, label) || setShowError(true)
          : sendData(name, true, input, null, label) || setShowError(false);
      }
    } else {
      if (input === "") {
        setShowError(false);
        sendData(name, false, input, null, label);
      } else {
        input.search(finder) !== -1
          ? sendData(name, false, input, error, label) || setShowError(true)
          : sendData(name, true, input, null, label) || setShowError(false);
      }
    }

    if (type === "passwordMatch") {
      setActualMatchValue(input);
    }
  }

  useEffect(() => {
    if (actualMatchValue !== match && actualMatchValue !== undefined) {
      setShowError(true);
      errorCatcher("Las contraseñas no coinciden");
    } else {
      setShowError(false);
    }
  }, [actualMatchValue, match, errorCatcher]);

  return (
    <div className={`input-container ${className} `}>
      <input
        ref={forwardedRef}
        autoComplete="off"
        maxLength={maxLength}
        type={match ? "password" : type}
        className={`input fs-${fontSize} fc-${fontColor} fw-${fontWeight} input-${
          showError ? "error" : color
        } `}
        placeholder={placeholder}
        name={name}
        id={id}
        required={required}
        onChange={onChange ? onChange : (e) => startValidation(e)}
      />
      <label htmlFor="label" className={`label fc-gray fs-${labelFontSize}`}>
        {label}
      </label>
    </div>
  );
};

export default WxInput;
