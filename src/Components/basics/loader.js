import React from "react";

const Loader = ({ type = "1", panel = false, className }) => {
  return (
    <div className={`${className} ${panel ? "panel-loading" : null} `}>
      <span className={`spinner-${type}`} />
    </div>
  );
};

export default Loader;
