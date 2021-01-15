import React, { useState } from "react";

const XYError = ({ title, content }) => {
  const [close, setClose] = useState();

  return (
    <div className={`XYalert ${close ? "closeerror " : "openerror "}`}>
      <span className="closebtn" onClick={() => setClose(true)}>
        &times;
      </span>
      <strong>{title}</strong> {content}
    </div>
  );
};

export default XYError;
