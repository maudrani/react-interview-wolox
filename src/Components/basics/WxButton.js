import React from "react";

const WxButton = ({
  content,
  color = 'blue',
  outline = false,
  fontColor,
  fontWeight,
  fontSize,
  btnClass,
}) => {
  return (
    <button
      className={`btn-${color}-${
        outline ? "outline" : "normal"
      } ${btnClass}`}
    >
      <span className={`fw-${fontWeight} fs-${fontSize} fc-${fontColor}`}>
        {content}
      </span>
    </button>
  );
};

export default WxButton;
