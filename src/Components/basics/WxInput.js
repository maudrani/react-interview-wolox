import React, { useState } from "react";

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
}) => {
  const [isValid, setIsValid] = useState(true);

  const validTypes = {
    tel: {
      finderType: "include",
      finder: /^\+?\d{7,15}$/m,
    },
    noun: {
      finderType: "exlude",
      finder: /[^a-zA-Z\s:]|\s{2}/gim,
    },
    mail: {
      finderType: "include",
      finder: /^[a-zA-Z0-9._+-]+[^.@]@\w+\.[a-z.]+/i,
    },
    password: {
      finderType: "include",
      finder: `[\\w\\W]{${minLength},}[^\\s]`,
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

  function Validate(input = "") {
    if (validTypes[type].finderType === "include") {
      if (input === "") {
        setIsValid(true);
      } else {
        input.search(validTypes[type].finder) === -1
          ? setIsValid(false)
          : setIsValid(true);
      }
    } else {
      input.search(validTypes[type].finder) !== -1
        ? setIsValid(false)
        : setIsValid(true);
    }
  }

  return (
    <div className={`input-container ${className} `}>
      <input
        autoComplete="off"
        maxLength={maxLength}
        type={type}
        className={`input fs-${fontSize} fc-${fontColor} fw-${fontWeight} input-${
          isValid ? color : "error"
        } `}
        placeholder={placeholder}
        name={name}
        id={id}
        required={required}
        onChange={(e) => startValidation(e)}
      />
      <label htmlFor="label" className={`label fc-gray fs-${labelFontSize}`}>
        {label}
      </label>
    </div>
  );
};

export default WxInput;
