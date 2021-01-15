import React from "react";
import XYText from "../../basics/XYText";
import BenefitList from "./benefit-list";

const Benefit = ({ className, forwardedRef }) => {

  return (
    <div ref={forwardedRef} className={`benefits ${className}`}>
      <div className="container c-sa-c ">
        <XYText
          className=" promo-title"
          size="1"
          content="dark-3[Discover the ] aqua-2[benefits ] dark-3[of ] blue-3[CMS]"
        />
        <BenefitList className=" benefits-list" />
      </div>
    </div>
  );
};

export default Benefit;
