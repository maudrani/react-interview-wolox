import React from "react";

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
  match,
  forwardedRef,
  onChange,
  showError = false,
  errorMessage,
}) => {
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
        onChange={onChange}
      />
      <label htmlFor="label" className={`label fc-gray fs-${labelFontSize}`}>
        {label}
      </label>
      {showError && <span className="fc-error">{errorMessage}</span>}
    </div>
  );
};

export default WxInput;
