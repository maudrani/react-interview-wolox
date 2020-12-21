import React from "react";

const WxButton = ({
  content,
  color = "blue",
  outline = false,
  fontColor,
  fontWeight = "4",
  fontSize,
  className,
  onClick,
  type,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-${color}-${outline ? "outline" : "normal"} ${className}`}
      disabled={disabled}
    >
      <span className={`fw-${fontWeight} fs-${fontSize} fc-${fontColor}`}>
        {content}
      </span>
    </button>
  );
};

export default WxButton;
