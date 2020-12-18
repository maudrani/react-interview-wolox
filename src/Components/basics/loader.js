import React from "react";

const Loader = ({ type = "1", panel = false }) => {
  return (
    <div className={panel ? "panel-loading" : null}>
      <span className={`spinner-${type}`} />
    </div>
  );
};

export default Loader;
