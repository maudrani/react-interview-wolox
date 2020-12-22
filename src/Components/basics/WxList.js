import React from "react";

const WxList = ({
  className,
  labelContent,
  labelFontSize,
  labelFontWeight,
  listFontSize,
  listFontWeight,
  onChange,
  name,
  listItems = [],
}) => {
  return (
    <div className={`wx-list ${className}`}>
      <label className={`fs-${labelFontSize} fw-${labelFontWeight} `} htmlFor="list">
        {labelContent}
      </label>
      <select
        className={`fs-${listFontSize} fw-${listFontWeight} `}
        onChange={onChange}
        name={name}
        id="list"
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

export default WxList;
