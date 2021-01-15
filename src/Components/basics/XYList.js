import React from "react";

const XYList = ({
  className,
  labelContent,
  labelFontSize,
  labelFontWeight,
  listFontSize,
  listFontWeight,
  onChange,
  name,
  listItems = [],
  onClick,
  placeholder,
  forwardedRef,
}) => {
  return (
    <div onClick={onClick} className={`XY-list ${className}`}>
      <label
        className={`fs-${labelFontSize} fw-${labelFontWeight} `}
        htmlFor={name}
      >
        {labelContent}
      </label>
      <select
        ref={forwardedRef}
        placeholder={placeholder}
        className={`fs-${listFontSize} fw-${listFontWeight} `}
        onChange={onChange}
        name={name}
        id={name}
      >
        {listItems.map((item, key) => {
          return (
            <option
              className={`fs-${listFontSize} fw-${listFontWeight} `}
              key={key}
              value={item}
            >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default XYList;
