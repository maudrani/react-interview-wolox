import React from "react";

const WButton = ({
  color,
  btnStyle,
  textColor,
  content,
  fontWeight,
  fontSize,
  btnClass,
}) => {
  return (
    <button className={`btn-${color}-${btnStyle} ${btnClass}`}>
      <span style={{ color: textColor }} className={`fw-${fontWeight} fs-${fontSize}`}>
        {content}
      </span>
    </button>
  );
};

export default WButton;
