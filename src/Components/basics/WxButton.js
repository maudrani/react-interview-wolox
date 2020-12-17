import React from "react";

const WxButton = ({
  content,
  color = 'blue',
  outline = false,
  fontColor,
  fontWeight = '4',
  fontSize,
  className,
}) => {
  return (
    <button
      className={`btn-${color}-${
        outline ? "outline" : "normal"
      } ${className}`}
    >
      <span className={`fw-${fontWeight} fs-${fontSize} fc-${fontColor}`}>
        {content}
      </span>
    </button>
  );
};

export default WxButton;
