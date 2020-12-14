import React from "react";
import Enunciate from "../SubComponents/Enunciate";

const Footer = () => {
  return (
    <div className="component footer column-center-center">
      <Enunciate containerClass='bg-2' content="desde Enunciate en Footer"/>
      <Enunciate containerClass='bg-2' content="desde Enunciate en Footer"/>
      <button>Conocer Mas</button>
      <img alt='wolox-logo'/>
    </div>
  );
};

export default Footer;
