import React from "react";
import WxButton from "../../Basics/WxButton";
import WxInput from "../../Basics/WxInput";
import WxSelector from "../../Basics/WxSelector";

const WxForm = ({}) => {
  return (
    <form autoComplete="off" className="form c-sa-fs">
      <div className="email-form">
        <WxInput
          placeholder="Ingrese su correo electrónico"
          label="E-mail"
          type="mail"
          className="form-item"
        />
        <WxInput
          placeholder="Ingrese la contraseña"
          label="Contraseña"
          type="password"
          className="form-item"
        />
        <WxInput
          placeholder="Repita la contraseña"
          label="Repetir contraseña"
          type="password"
          className="form-item"
        />
      </div>

      {/* <div className='personaldata-form'>

      </div> */}

      <div className="r-fs-c form-item">
        <WxSelector />
        <span className="info-text fs-6">
          Acepto los{" "}
          <a className="fw-2 fc-blue" href="#terminos">
            términos y condiciones
          </a>
        </span>
      </div>

      <div className="form-item form-options r-fs-c">
        <WxButton
          className="btn-form"
          fontSize="5"
          fontWeight="3"
          content="Siguiente"
          onClick={(e) => e.preventDefault()}
        />
        <a className="fw-3 fs-6 fc-gray" href="#cancel">
          Cancelar
        </a>
      </div>
    </form>
  );
};

export default WxForm;
