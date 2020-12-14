import React from "react";
import Enunciate from "../SubComponents/Enunciate";
import BenefitsList from "./Benefits-List";

const Benefits = () => {
  return (
    <div className="component">
      <Enunciate
        containerClass="bg-1 row-center-center"
        content={"desde Enunciate en Benefits"}
      />
      <div className="bg-2 row-center-center">
        <BenefitsList />
      </div>
    </div>
  );
};

export default Benefits;
