import React, { useState } from "react";

const WxError = ({ title, content }) => {
  const [close, setClose] = useState();

  return (
    <div className={`wxalert ${close ? "closeerror " : "openerror "}`}>
      <span className="closebtn" onClick={() => setClose(true)}>
        &times;
      </span>
      <strong>{title}</strong> {content}
    </div>
  );
};

export default WxError;
